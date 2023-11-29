import '../styles/bundle.sass'

document.addEventListener('DOMContentLoaded', () => {
	// plans
	const plansItems = document.querySelectorAll('.plans__item')

	plansItems.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.add('active')
		})
	})

	function removePlansActiveState() {
		plansItems.forEach(item => {
			item.classList.remove('active')
		})
	}

	// modal
	const modal = document.querySelector('#plans-modal')
	const openModalTrigger = document.querySelectorAll('[data-modal-trigger]')
	const modalCloseBtn = document.querySelectorAll('[data-modal-close]')
	const modalBtnStart = modal.querySelector('[data-modal-start]')

	openModalTrigger.forEach(trigger => {
		trigger.addEventListener('click', (e) => {
			openModal()
		})
	})

	modalCloseBtn.forEach(closeBtn => {
		closeBtn.addEventListener('click', (e) => {
			closeModal()
			removePlansActiveState()
			eventsLogger('Click On Close Button From Modal')
		})
	})

	modalBtnStart.addEventListener('click', (e) => {
		closeModal()
		removePlansActiveState()
		eventsLogger('Click On Get Started Button From Modal')
	})

	function openModal() {
		modal.classList.add('opened')
	}
	function closeModal() {
		modal.classList.remove('opened')
	}

	// logger
	function eventsLogger(eventText) {
		// const url = 'https://httpbin.org/post' // test post query
		const data = { event: eventText }

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data.data);
			})
			.catch((err) => {
				console.error('Error:', err)
			})
	}
})