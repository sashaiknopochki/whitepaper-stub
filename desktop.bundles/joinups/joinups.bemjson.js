module.exports = {
	block: 'page',
	title: 'joinups',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'joinups.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'joinups.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default',
			gap: 'small', menu: 'default', breakpoint: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		},
	],

	content: [

	 {
		 block: 'logo-yandex-checkout', /* сделать выравнивание */
		 mods: { align: 'center' },
		 mix: { block: 'decorator', mods: { 'indent-t': 'xxxxxl', 'indent-b': 'xxxxxl' } },
	 },

/*  ни как не выровнять по центру */

	 {
		 block: 'tpl-grid',
		 mods: { columns: '12', align: 'center' } ,
		 mix: { block: 'decorator', mods: { 'space-l': 'xxxxxxl', 'indent-l': 'xxxxxxl' } },
		 /* mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxxl', 'indent-r': 'xxxxxxl' } }, */
		 /* mix: { block: 'decorator', mods: { 'space-l': 'xxxxxxl', 'indent-l': 'xxxxxxl' } }, */
		 content: [
			 {
				 elem: 'fraction', /* все инпуты и контролы */
				 elemMods: { col: '6', aligh: 'center' },
				 content: [
					 {
						 block: 'pt-form',
						 mods: { view: 'default' },
						 mix: { block: 'decorator', mods: { 'space-a': 'xxxl' } },
						 content: [
							 /* {
								 elem: 'item',
								 elemMods: { 'space-v': 'xs', distribute: 'default', 'vertical-align': 'center' },
								 content: [
									 {
										 block: 'checkbox',
										 mods: { checked: 'true', size: 'm', theme: 'islands', 'hover': true, 'indent-v': 'xl', 'indent-h': 'xxxl' },
										 mix: { block: 'decorator', mods: { 'indent-t': 'xxxl' } },
										 name: 'checkbox__russian',
										 val: 'Значение чекбокса, которое будет отправлено на сервер, если он выбран.',
										 text: 'Моя организация зарегистрирована зарубежем',
									 },
								 ],
							 }, */

							 {
								 elem: 'item',
								 content: [
									 {
										 block: 'pt-table',
										 content: [
											 {
												 elem: 'row',
												 content: [
													 {
														 elem: 'col',
														 elemMods: { width: '50' },
														 content:
														 {
															 block: 'text',
															 mods: { size: 'm' },
															 content: 'Где зарегистрирована организация'
														 }
													 },
													 {
														 elem: 'col',
														 elemMods: { width: '50' },
														 content:
														 {
															 block: 'radio-group',
															 mods: { type: 'button', theme: 'islands', size: 'l' },
															 val: 1,
															 options: [
																 {
																	 val: 1,
																	 text: 'В России'
																 },
																 {
																	 val: 2,
																	 text: 'За рубежем'
																 },
															 ]
														 }
													 },
												 ]
											 }
										 ]
									 }
								 ]
							 },

							 {
								 elem: 'item',
								 mix: { block: 'decorator', mods: { 'indent-t': 'xxl' } },
								 content: [
									 {
										 elem: 'label',
										 content: {
											 block: 'text',
											 mods: { size: 'm' },
											 content: 'Название компании или ИНН',
										 }
									 },
									 {
										 elem: 'control',
										 mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
										 content: {
											 block: 'input',
											 mods: { width: 'available', 'has-clear': true, 'focused': true, theme: 'islands', size: 'm', 'indent-v': 'xl', 'indent-h': 'xxxl' }, /* indent-v не сработали */
											 name: 'company__name',
											 autocomplete: 'Boolean',
											 placeholder: 'Введите название компании или ИНН',
											 val: 'АО "АЛЬФА-БАНК"'
										 }
									 }
								 ]
							 },

							 {
								 elem: 'item',
								 mix: { block: 'decorator', mods: { 'indent-t': 's' } },
								 content: [
									 {
										 block: 'text',
										 mods: { size: 'm', view: 'link'},
										 /* url: 'https://money.yandex.ru/quickpay/', */
										 content: 'У меня нет ИП или юрлица'
									 }
								 ]
							 },

							 {
								 elem: 'item',
								 mix: { block: 'decorator', mods: { 'indent-t': 'xxxl', 'indent-b': 'xl' } },
								 content: {
									 block: 'text',
									 mods: { transform: 'uppercase', weight: 'bold', size: 'm' }, /* еще бы межбуквенное расстояние увеличить */
									 content: 'Выберите аккаунт для Яндекс.Кассы'
								 }
							 },

							 {
								 elem: 'item',
								 content: {
									 block: 'pt-table',
									 content: [
										 {
											 elem: 'row',
											 content: [
												 {
													 elem: 'col',
													 elemMods: { width: '50' },
													 content: {
														 block: 'pt-icon-plus',
														 mods: { 'vertical-align': 'center', theme: 'islands', size: 'm' },
														 content: [
															 {
																 elem: 'icon',
																 content: {
																	 block: 'icon',
																	 mods: { name: 'user', size: 'm', view: 'primary' }
																 }
															 },
															 {
																 elem: 'control',
																 mix: { block: 'decorator', mods: { 'indent-l': 's' } },
																 content: {
																	 block: 'checkbox',
																	 mods: { type: 'button', theme: 'islands', 'space-a': 'l', size: 'm' },
																	 text: 'username@ya.ru'
																 }
															 }
														 ]
													 }
												 },
												 {
													 elem: 'col',
													 elemMods: { width: '50' },
													 content: {
														 block: 'pt-icon-plus',
														 mods: { 'vertical-align': 'center', theme: 'islands', size: 'm' },
														 content: [
															 {
																 elem: 'icon',
																 content: {
																	 block: 'icon',
																	 mods: { name: 'add-2', size: 'm', view: 'primary' },
															 }
														 },
															 {
																 elem: 'control',
																 mix: { block: 'decorator', mods: { 'indent-l': 's' } },
																 content: {
																	 block: 'button',
																	 mods: { theme: 'islands', size: 'm' },
																	 text: 'Другой аккаунт',
																	 url: 'https://passport.yandex.ru/'
																 }

															 }
														 ]


													 }
												 }
											 ]
										 }
									 ]
								 }
							 },

							 {
								 elem: 'item',
								 mix: { block: 'decorator', mods: { 'indent-t': 'xxl' } },
								 content: {
										 block: 'button',
										 mods: { theme: 'islands', width: 'available', view: 'action', size: 'l' },
										 text: 'Продолжить'
									 }
								 },

								 { /* нижняя ссылка на карточке, просто text, link блоки не заработали почему-то  */
									 elem: 'item',
									 content:
									 {
										 block: 'pt-table',
										 mix: { block: 'decorator', mods: { 'indent-t': 'l' } },
										 content: [
											 {
												 elem: 'row',
												 content: [
													 {
														 elem: 'col',
														 content:
														 {
															 block: 'text',
															 mods: { theme: 'islands', size: 's' },
															 content: 'Вы принимаете'
														 }
													 },
													 {
														 elem: 'col',
														 content:
														 {
															 block: 'text', /*  приделать ссылку url: 'https://money.yandex.ru/doc.xml?id=523050' */
															 mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
															 mods: { theme: 'islands', size: 's', view: 'link' },
															 content: 'условия использования личного кабинета',
														 }
													 },
												 ] /* row */
											 }
										 ]
									 },
								 },



				 ], /* закрывает content pt-form */
			 },
		 ],


	 }, /* закрывает elem form */
  ],
}, /* закрывает pt-card */

{
	block: 'text',
	mix: { block: 'decorator', mods: { 'indent-t': 'xxxxxl' } },
	mods: { view: 'link', size: 's', align: 'center' },
	content: 'Помощь        Ru        © 2019 ООО НКО «Яндекс.Деньги»'
}


], /* закрывает самый верхний content на 25 строке */
} /* закрывает страницу на 1 строке */
