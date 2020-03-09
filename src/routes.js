//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import AddAnotherItem from './components/AddAnotherItem.vue'
export default[
    { path: '/', component: PageContent},
    { path: '/add', component: AddItem},
    {path:'/addanother', component: AddAnotherItem}
]