import Mock from 'mockjs'

const userList = Mock.mock({
  defaultName: "@image('100x100','#894fc4','#fff','png','!')"
})

Mock.mock('/user', 'get', userList)
