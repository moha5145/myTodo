import { uid } from "quasar";
import Localbase from 'localbase'
import { reactive } from 'vue'

const db = new Localbase('myTodo')

const state = reactive({
    categorys: [
        {
            name: 'Course',
            dueDate: '12/05/2021',
            dueTime:'14:00',
            id: uid(),
            todoList:[
                {
                    id: uid(),
                    done: false,
                    name: 'Banane',
                    dueDate: '',
                    dueTime: '', 
                    time: new Date()
                }
            ],
            showTasks: true,
            time: new Date()
        }
    ],
    category: {
        name: '',
        dueDate: '',
        dueTime:'',
        id: uid(),
        todoList:[],
        showTasks: true,
        time: new Date()
    },
    task:  {
        id: uid(),
        done: false,
        name: '',
        dueDate: '',
        dueTime: '', 
        time: new Date()
    },
    themeColor: "#f57b00",
    isDuplicateName: null,
    addTaskDialog: false
})

const methods = {
    getCollection() {
        // const categ = JSON.parse(JSON.stringify(state.categorys[0]))
        // db.collection('categorys').add(categ)

        // state.categorys = []

        db.collection('categorys').get()
            .then(categorys =>  state.categorys = categorys)
            .catch(error => console.log(error))

        db.collection('changeTheme').get()
                .then(themeColor => state.themeColor = themeColor[0].themeColor)
                .catch(error => console.log(error))
                console.log('from get data', state.themeColor)
    },

    changeColor(payload) {
        db.collection('changeTheme').delete()
    
        db.collection('changeTheme').add({themeColor: payload} )
        state.themeColor = payload  
    },
        
    addCategory(category) {
        const categ = JSON.parse(JSON.stringify(category))
        
        db.collection('categorys').add(categ)
            .then(state.categorys = [...state.categorys, category])
            .catch((err) => {
                console.log(err)
            })

        state.category = {
            name: '',
            dueDate: '',
            dueTime: '',
            id: uid(),
            todoList: [],
            showTasks: true,
            time: new Date()
        }
        // state.addTaskDialog = true
    },

    required(propertyType) {
        return v => v && v.length > 0 || `${propertyType} is required`
    },

    duplicateName(propertyType ) {
        return v => v !== state.isDuplicateName || `You must add another ${propertyType}, this name exists`
    },

    isSameCategory(payload) { 
        state.isDuplicateName = null
        state.categorys.find(category => {
            if(category.name === payload.name) {
              return state.isDuplicateName = category.name
            } 
        })
    },
    
    editCategory(payload) {
        state.categorys.find(category => {
            if(category.id === payload.id) {
                console.log(payload.name)
                category.name = payload.name
                category.dueDate = payload.dueDate
                category.dueTime = payload.dueTime
                category.showTasks = payload.showTasks
            }
        
            db.collection('categorys').doc({ id: payload.id })
                .update({
                    name: payload.name,
                    dueDate: payload.dueDate,
                    dueTime: payload.dueTime,
                    // showTasks: payload.showTasks,
                    // todoList: payload.todoList
                })
            }) 
            
    },
    closeCategoryAcordion() {
        return state.categorys.find(category => {
              category.showTasks = false
    
              db.collection('categorys').doc({ id: category.id })
              .update({ showTasks: category.showTasks })
        })
    },
    showTasks(payload) {
        return state.categorys.find(category => {
            if(category.id == payload.id) {
                category.showTasks = !category.showTasks
            }
        })
    },

    deleteCategory(payload) {
        db.collection('categorys').doc({ id: payload.id }).delete()
        
        let list = state.categorys.findIndex(category => category.id === payload.id)
          state.categorys.splice(list, 1)
    },

    isSameTask(categ, tas) { 
        state.isDuplicateName = null
        state.categorys.find(category => {
            if(category.name === categ.name) {
                category.todoList.find(task => {
                    if(task.name === tas.name) {
                        console.log(tas.name)
                        return state.isDuplicateName = task.name
                    }
                })
            } 
        })
    },
    addTask(payload1, payload2) {  
        state.categorys.find(category => { 
            if(category.id == payload2.id) {
                category.todoList.push(payload1)

                const todoList = JSON.parse(JSON.stringify(category.todoList))
                db.collection('categorys')
                    .doc({ id: payload2.id })
                    .update( {todoList: todoList})
            }
            state.addTaskDialog = false
        })

        state.task =  {
            id: uid(),
            done: false,
            name: '',
            dueDate: '',
            dueTime: '',
            time: new Date()
        }
    },

    editTask(payload, payload2) {
        state.categorys.find(category => {
            category.todoList.find(list => {
                if(list.id === payload.id) {
                    list.name = payload.name,
                    list.dueDate = payload.dueDate,
                    list.dueTime = payload.dueTime,
                    list.done = payload.done 

                    const todoList = JSON.parse(JSON.stringify(category.todoList))
                    db.collection('categorys')
                        .doc({ id: payload2.id })
                        .update( {todoList: todoList})
                }
            })
        })
    },
    deleteTask(payload1, payload2) {
        state.categorys.find(category => {
            if(category.id === payload2.id) {
              category.todoList = category.todoList.filter(task => task.id != payload1.id)

              const todoList = JSON.parse(JSON.stringify(category.todoList))
      
              db.collection('categorys')
              .doc({ id: payload2.id })
              .update({ todoList: todoList })
            }
        })
    },

    doneTodo(payload1, payload2) {
        return state.categorys.find(category => {
          return category.todoList.find(task => {
            if(task.id === payload1.id) {
               task.done = !task.done
    
               const todoList = JSON.parse(JSON.stringify(category.todoList))
               db.collection('categorys')
                .doc({ id: payload2.id })
                .update({ todoList:  todoList })
            }
          })
        })
    }
};

const getters = {
    sortedCategory() {
        return state.categorys.slice().sort((a, b) => (b.date > a.date)  ? 1 : -1  )
    }
}

export default {
    state,
    methods,
    getters
}