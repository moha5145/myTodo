<template>
    <div class=" bg-grey-2" >
        <div v-for="list in sortedTodoList()" :key="list.id" class="bg-white" style="border-radius: 20px">
            <Tasks  :list="list" :category="category" class="q-mb-xs ">
            </Tasks>
        </div>
        
    </div>
</template>

<script>
    import Tasks from 'components/tasks/Tasks.vue'
export default {
    components: {Tasks},
    props: ['todoList','category'],
    setup(props) {
        const sortedTodoList = () => {
            return props.todoList.slice().sort((a, b) => (b.date > a.date)  ? 1 : -1  )
        }

        return {
            sortedTodoList
        }
    }
    
}
</script>