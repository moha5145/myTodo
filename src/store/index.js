import { uid } from "quasar";
import Localbase from 'localbase'
import { reactive } from 'vue'
import slugify from 'slugify'
// import { useQuasar } from 'quasar'

const db = new Localbase('myTodo')
// const $q = useQuasar()

const state = reactive({
    // $q: useQuasar(),
    categorys: [],
    category: {
        name: '',
        dueDate: '',
        dueTime:'',
        slug: '',
        id: uid(),
        showTasks: true,
        created_at: new Date()
    },
    todoList:[
        
    ],
    task:  {
        id: uid(),
        done: false,
        name: '',
        dueDate: '',
        dueTime: '', 
        categorySlug: '',
        created_at: new Date()
    },
    // list: [],
    themeColor: "#f57b00",
    isDuplicateName: null,
    addTaskDialog: false
})

const methods = {
    getCollection() {

        db.collection('categorys').orderBy('created_at', 'desc').get()
            .then(categorys =>  state.categorys = categorys)
            .catch(error => console.log(error))

        db.collection('todoList').orderBy('created_at', 'desc').get()
            .then(todoList =>  state.todoList = todoList)
            .catch(error => console.log(error))

        db.collection('changeTheme').get()
            .then(themeColor => state.themeColor = themeColor[0].themeColor)
            .catch(error => console.log(error))
                
    },

    changeColor(payload) {
        db.collection('changeTheme').delete()
    
        db.collection('changeTheme').add({themeColor: payload} )
        state.themeColor = payload  
    },
        
    addCategory(category) {
        category.slug = slugify(category.name, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
        })

        const categ = JSON.parse(JSON.stringify(category))
    
        db.collection('categorys').add(categ)
            .then(state.categorys.unshift(category))
            .catch((err) => {
                console.log(err)
            })

        state.category = {
            name: '',
            dueDate: '',
            dueTime: '',
            id: uid(),
            created_at: new Date()
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
        payload.slug = slugify(payload.name, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
        })

        state.categorys.find(category => {
            if(category.id === payload.id) {
                category.name = payload.name
                category.slug = payload.slug
                category.dueDate = payload.dueDate
                category.dueTime = payload.dueTime
            }
        
            db.collection('categorys').doc({ id: payload.id })
                .update({
                    name: payload.name,
                    dueDate: payload.dueDate,
                    dueTime: payload.dueTime,
                    slug: payload.slug
                })
            }) 
            
    },
 
    deleteCategory(payload) {
        db.collection('todoList').doc({ categorySlug: payload.slug}).delete()
        
        state.todoList = state.todoList.filter(list => {    
            if(payload.slug === list.categorySlug) {
                return list.categorySlug != payload.slug
            }
        })
        
        db.collection('categorys').doc({ id: payload.id }).delete()
        
        state.categorys = state.categorys.filter(category => category.id != payload.id)
    },

    isSameTask(tas) { 
        state.isDuplicateName = null 
        state.todoList.find(task => {
            if(task.name === tas.name) {
                return state.isDuplicateName = task.name
            }
        })    
    },

    addTask(payload1, payload2) {  
  
        payload1.categorySlug = payload2.slug

        const todoList = JSON.parse(JSON.stringify(payload1))

        db.collection('todoList').add(todoList)
            .then(state.todoList.unshift(payload1))
        
        state.task =  {
            id: uid(),
            done: false,
            name: '',
            dueDate: '',
            dueTime: '',
            categorySlug: '',
            created_at: new Date()
        }
    },

    editTask(payload) {        
        state.todoList.find(list => {
            if(list.id === payload.id) {
                list.name = payload.name,
                list.dueDate = payload.dueDate,
                list.dueTime = payload.dueTime,
                list.done = payload.done 

                db.collection('todoList')
                    .doc({ id: payload.id })
                    .update( {
                        name: payload.name,
                        dueDate: payload.dueDate,
                        dueTime: payload.dueTime,
                        done: payload.done })
            }
        })     
    },

    deleteTask(payload) {
        db.collection('todoList')
            .doc({ id: payload.id })
            .delete()  
            .then(state.todoList = state.todoList.filter(task => task.id != payload.id))
    },

    doneTodo(payload) {
        return state.todoList.find(task => {
            if(task.id === payload.id) {
                task.done = !task.done

                db.collection('todoList')
                .doc({ id: payload.id })
                .update({ done:  payload.done })
            }
        })  
    }
};

const getters = {
    // sortedCategory() {
    //     return state.categorys.slice().sort((a, b) => (b.date > a.date)  ? 1 : -1  )
    // }

    todoList(payload) {
        return state.todoList.filter(todo => todo.slug == payload)
    }
}

export default {
    state,
    methods,
    getters
}