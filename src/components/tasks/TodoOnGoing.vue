<template>
    <div>
        <div v-if="incompleted().length" class="" >
            <div v-for="list in incompleted()" :key="list.id" class="" style="border-radius: 20px">
                <transition-group
                        appear
                        enter-active-class="animated fadeIn slow"
                        leave-active-class="animated fadeOut slow"
                        >
                <SingleTasks v-if="list.categorySlug == category" :list="list" :category="category"  class="q-mb-xs ">
                </SingleTasks>
                </transition-group>
            </div>
            
        </div>

        <div v-else>
            <h6 class="text-center q-my-xs text-grey-6">{{$t( 'NothingToDo' ) }}</h6>
        </div>
    </div>

</template>

<script>
import SingleTasks from './SingleTasks.vue'
export default {
  components: { SingleTasks },
    props: ['todoList', 'category'],

     setup(props) {
        const incompleted = () => {
           return props.todoList.filter(task => !task.done )
        }

        return {
            incompleted
        }
    }
}
</script>