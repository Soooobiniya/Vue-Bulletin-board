import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home.vue'

import QuestionList from '@/pages/questionlist/index.vue'
import Question from '@/pages/questionlist/_id.vue'
import QuestionCreate from '@/pages/questionlist/create/index.vue'
import QuestionEdit from '@/pages/questionlist/edit/index.vue'

import FreeList from '@/pages/freelist/index.vue'
import Free from '@/pages/freelist/_id.vue'
import FreeCreate from '@/pages/freelist/create/index.vue'
import FreeEdit from '@/pages/freelist/edit/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
        },

        {
            path: '/freelist',
            name: 'FreeList',
            component: FreeList
        },
        {
            path: '/freelist/:id',
            name: 'Free',
            component: Free
        },
        {
            path: '/freelist/create',
            name: 'FreeCreate',
            component: FreeCreate
        },
        {
            path: '/freelist/edit/:id',
            name: 'FreeEdit',
            component: FreeEdit
        }
    ]
})

export default router
