import {createStore} from 'vuex'

const store = createStore({
	state() { //변수들의 집합
		return {
			account: {
				id: 0
			},
			name: '이름이이'
		}
	},
  getters: { // [state의 변수들을 get 호출]
    getUserInfo(state){
      return "이름 : " + state.name;
    }
  },
	mutations: {
		setAccount(state, payload) {
			state.account.id = payload;
		}
	}
})

export default store;