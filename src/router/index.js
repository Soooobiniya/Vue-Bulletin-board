import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'
import FreeList from '@/pages/freelist/index.vue'
import QuestionList from '@/pages/questionlist/index.vue'
import Question from '@/pages/questionlist/_id.vue'
import QuestionCreate from '@/pages/questionlist/create/index.vue'
import QuestionEdit from '@/pages/questionlist/edit/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/freelist',
            name: 'FreeList',
            component: FreeList
        },
        {
            path: '/questionlist',
            name: 'QuestionList',
            component: QuestionList
        },
        {
            path: '/questionlist/:id',
            name: 'Question',
            component: Question
        },
        {
            path: '/questionlist/create',
            name: 'QuestionCreate',
            component: QuestionCreate
        },
        {
            path: '/questionlist/edit/:id',
            name: 'QuestionEdit',
            component: QuestionEdit
        }
    ]
})

export default router
