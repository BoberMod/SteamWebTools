// ==UserScript==
// @name		Steam Web Tools
// @namespace	http://v1t.su/projects/steam/webtools/
// @description	Useful tools in Steam web sites
// @author		Mr-VIT
// @homepage	http://v1t.su/projects/steam/webtools/
// @icon		http://mr-vit.github.io/SteamWebTools/icon-64.png
// @run-at		document-end
// @include		http://store.steampowered.com/*
// @include		https://store.steampowered.com/*
// @include		http://steamcommunity.com/*
// @include		https://steamcommunity.com/*
// @connect		checkrep.ru
// @domain		checkrep.ru
// @connect		store.steampowered.com
// @domain		store.steampowered.com
// @version		0.8.13
// @date		2018-04-19
// @updateURL	https://raw.githubusercontent.com/BoberMod/SteamWebTools/master/release/version.tm.js
// @grant		GM_xmlhttpRequest
// @grant		GM_xhr
// @grant		GM_getValue
// @grant		GM_setValue
// @grant		GM_deleteValue
// ==/UserScript==

!function () {
	var f = window.unsafeWindow || window,
	_ = {
		locales: ["en", "ru", "jp", "zh-cn"],
		defaults: {
			version: 1,
			globalLang: "en",
			globalFixNavbar: !0,
			globalHideAccName: !0,
			globalHideWalletBalance: !0,
			globalDisableLinkFilted: !1,
			storeShowCCbtn: !0,
			storeCCList: "ru ua us ar fr no gb au br de jp",
			storeShowCartBtn: !0,
			storeCartAjax: !0,
			storeShowSubid: !0,
			storeShowBtnGetPrices: !0,
			marketMainPageFuncs: !0
		},
		cur: {},
		storage: {
			key: "SWTSettings",
			gm: !!window.GM_getValue,
			set: function (e) {
				this.gm ? GM_setValue(this.key, e) : f.localStorage.setItem(this.key, e)
			},
			get: function () {
				return this.gm ? GM_getValue(this.key) : f.localStorage.getItem(this.key)
			},
			del: function () {
				this.gm ? GM_deleteValue(this.key) : f.localStorage.removeItem(this.key)
			}
		},
		load: function () {
			this.cur = f.$J.extend({}, this.defaults);
			var e = this.storage.get();
			if (e)
				"string" == typeof e && (e = JSON.parse(e)), f.$J.extend(this.cur, e);
			else {
				var t,
				a = f.navigator.language.toLowerCase();
				if (-1 < (t = this.locales.indexOf(a)))
					this.cur.globalLang = this.locales[t];
				else if (1 < (a = a.split("-")).length)
					 - 1 < (t = this.locales.indexOf(a[0])) && (this.cur.globalLang = this.locales[t]);
				this.save();
				var i = {
					outline: "#48DA48 3px solid"
				},
				n = f.$J("#global_header .menuitem.supernav:nth(1)");
				n.css(i),
				setTimeout(function () {
					n.trigger("mouseover")
				}, 1e3),
				setTimeout(function () {
					f.$J("#global_header .submenu_community .submenuitem.swt").css(i)
				}, 2e3)
			}
		},
		save: function () {
			this.cur && this.storage.set(JSON.stringify(this.cur))
		},
		reset: function () {
			this.storage.del(),
			this.cur = this.defaults
		}
	};
	function v(e) {
		return v.text[e] || e
	}
	if (_.load(), f.swt_settings = _, v.loadText = function (e) {
		this.text ? e["lang.code"] == _.cur.globalLang && f.$J.extend(this.text, e) : this.text = e
	}, v.loadText({
			"lang.current": "English",
			"lang.code": "en",
			getMoreInfo: "Get more Info",
			extInfo: "Extended Info",
			reqErr: "Request Error",
			checkin: "Check in",
			searchinforums: "Search in forums",
			inventory: "Inventory",
			toInventory: "To Inventory",
			profile: "Profile",
			trades: "Trades",
			chat: "Chat",
			more: "More",
			showDropsCard: "Show only with cards drops remaining",
			craftAllAvailable: "Craft all available",
			howmany: "How many? of ",
			save: "Save",
			get: "Get",
			checkForSend: "Check for send",
			sendChecked: "Send checked",
			showNote: "Show Note",
			minMarketPrice: "Min. Market price",
			hideDup: "Hide duplicates, show amount",
			go: "Go",
			checkAll: "Check all",
			deleteChecked: "Delete checked",
			addSubidsToCart: "Add SubIDs to cart",
			add: "Add",
			addChecked: "Add checked",
			cartHist: "Cart history",
			clearCart: "Clear cart",
			quickPurchase: "One-Click Buy to inventory (SteamWallet only)",
			giftForSend: "Gifts for send",
			giftForSendNote: "If you want to send Gifts to different Emails enter them below one per line. Gifts will be sent on the order. If quantity of gifts greater than address the remaining Gifts will be sent to the last address",
			sent: "Sent",
			def: "Default",
			getPrices: "Get prices for other countries",
			prices: "Prices for other countries",
			viewin: "View in",
			searchin: "Search in",
			viewMyCardsGame: "View my cards/badge this game",
			SearchCardsOnMarket: "Search cards on Market",
			adding: "adding",
			added: "Added | View in cart",
			balance: "Balance",
			acc: "Account",
			acceptAllToInv: "Accept all to inventory",
			listed: "Listed: ",
			skipped: "Skipped: ",
			setlowestprice: "set lowest price",
			skipSent: "Skip gifts sent before?",
			totop: "To top",
			"set.ext": "extension",
			"set.settings": "Settings",
			"set.homePage": "Home Page",
			"set.global": "Global",
			"set.lang": "Language",
			"set.hideAccName": "Hide Account name. It will be displayed in the tooltip when you hover.",
			"set.hideBalance": "Hide Wallet Balance. It will be displayed in the tooltip when you hover.",
			"set.store": "Store",
			"set.showCCBtn": "Show button change country",
			"set.CCList": "Your list of countries. Enter your country first",
			"set.showCartBtn": "Always show Cart button",
			"set.cartAjax": "Adding to cart without reloading the page",
			"set.showSubid": "Show SubID",
			"set.showBtnGetPrices": 'Show button "Get prices for other countries"',
			"set.def": "Restore the default",
			"set.market": "Community Market",
			"set.marketMainPageFuncs": "Enable functions in main page of Community Market",
			"set.FixNavbar": "Fix Navbar",
			"set.linkfilter": "Disable link filter alert",
			"rep.unk": "unknown",
			"rep.mdlman": "middleman",
			"rep.white": "whitelisted",
			"rep.black": "blacklisted",
			"rep.orange": "suspicious"
		}), v.loadText({
			"lang.current": "Русский",
			"lang.code": "ru",
			getMoreInfo: "Получить больше Информации",
			extInfo: "Расширенная Информация",
			reqErr: "Ошибка при получении данных",
			checkin: "Проверить на",
			searchinforums: "Искать на форумах",
			inventory: "Инвентарь",
			toInventory: "В Инвентарь",
			profile: "Профиль",
			trades: "Трэйды",
			chat: "Чат",
			more: "Ещё",
			showDropsCard: "Показать с невыпавшими картами",
			craftAllAvailable: "Крафт всех доступных",
			howmany: "Сколько выбрать? из ",
			save: "Сохранить",
			get: "Получить",
			checkForSend: "Выбрать для отправки",
			sendChecked: "Отправить выбранные",
			showNote: "Посмотреть заметку",
			minMarketPrice: "Мин цена на маркете",
			hideDup: "Прятать дубликаты, показывая кол-во",
			go: "Перейти",
			checkAll: "Выбрать все",
			deleteChecked: "Удалить выбранные",
			addSubidsToCart: "Добавить SubID'ы в корзину",
			add: "Добавить",
			addChecked: "Добавить выбранные",
			cartHist: "История корзины",
			clearCart: "Очистить Корзину",
			quickPurchase: "Купить в инвентарь за один клик (только со Steam Кошелека)",
			giftForSend: "Гифты для отправки",
			giftForSendNote: "Если хотите отправить гифты на разные Email введите их ниже по одному на строку. Гифты будут отправленны по порядку. Если гифтов больше чем адресов, оставшиеся гифты будут отправлены на последний адрес",
			sent: "Отправлен",
			def: "По умолчанию",
			getPrices: "Получить цены для других стран",
			prices: "Цены для других стран",
			viewin: "Посмотреть на",
			searchin: "Искать на",
			viewMyCardsGame: "Посмотреть мои карты/значек этой игры",
			SearchCardsOnMarket: "Найти карточки на Торг.пл.",
			adding: "добавление",
			added: "Добавлено | Корзина",
			balance: "Баланс",
			acc: "Аккаунт",
			acceptAllToInv: "Принять все в инвентарь",
			listed: "Выставлено: ",
			skipped: "Пропущено: ",
			setlowestprice: "установить минимальную цену",
			skipSent: "Пропустить отправленные ранее?",
			totop: "Наверх",
			"set.ext": "расширение",
			"set.settings": "Настройки",
			"set.homePage": "Домашняя страница",
			"set.global": "Глобальные",
			"set.lang": "Язык",
			"set.hideAccName": "Скрывать имя аккаунта. Будет показываться в подсказке при наведении",
			"set.hideBalance": "Скрывать баланс кошелька. Будет показываться в подсказке при наведении",
			"set.store": "Магазин",
			"set.showCCBtn": "Показывать кнопку переключения страны",
			"set.CCList": "Ваш список стран. Вашу страну укажите первой",
			"set.showCartBtn": "Показывать кнопку корзины, даже если она пуста",
			"set.cartAjax": "Добавлять в корзину без перезагрузки страницы",
			"set.showSubid": "Отображать номер подписки",
			"set.showBtnGetPrices": "Показывать кнопку получения цен для других стран",
			"set.def": "Восстановить по умолчанию",
			"set.market": "Торговая Площадка",
			"set.marketMainPageFuncs": "Включить надстройку на главной странице торговой площадки",
			"set.FixNavbar": "Зафиксировать Меню Навигации",
			"set.linkfilter": "Отключить предупреждение фильтра ссылок",
			"rep.unk": "неизвестен",
			"rep.mdlman": "гарант",
			"rep.white": "в белом списке",
			"rep.black": "в черном списке",
			"rep.orange": "подозрительный"
		}), v.loadText({
			"lang.current": "简体中文",
			"lang.code": "zh-cn",
			getMoreInfo: "获取更多信息",
			extInfo: "详细信息",
			reqErr: "请求失败",
			checkin: "查询声誉",
			searchinforums: "搜索论坛",
			inventory: "查询库存",
			profile: "查询资料",
			trades: "查询交易",
			chat: "聊天",
			more: "更多",
			showDropsCard: "只查看可掉卡游戏",
			howmany: "多少个? 总共 ",
			save: "保存",
			get: "获取",
			checkForSend: "选中",
			sendChecked: "发送所选",
			showNote: "显示备忘",
			minMarketPrice: "最低市场价格",
			hideDup: "合并重复项并显示数量",
			go: "跳转",
			checkAll: "全选",
			deleteChecked: "删除选中",
			addSubidsToCart: "添加 SubIDs 到购物车",
			add: "添加",
			addChecked: "添加选中",
			cartHist: "购物车历史记录",
			clearCart: "清空购物车",
			quickPurchase: "一键购买到库存 (只支持 Steam 钱包)",
			giftForSend: "准备发送的礼物",
			giftForSendNote: "如果想给不同的 Email 地址发送礼物,请在下框中每行填写一个 Email. 礼物将按顺序发送. 如果礼物数量大于 Email 地址数, 余下的礼物将被全部发送到最后一个地址.",
			sent: "已发送",
			def: "默认",
			getPrices: "获取其他地区的价格",
			prices: "其他地区价格",
			viewin: "查询",
			searchin: "搜索",
			viewMyCardsGame: "查看该游戏的卡片/徽章",
			adding: "正在添加",
			added: "已添加 | 在购物车中查看",
			balance: "余额",
			acc: "账户",
			acceptAllToInv: "接受全部并加入库存",
			"set.ext": "扩展",
			"set.settings": "设置",
			"set.homePage": "主页",
			"set.global": "全局",
			"set.lang": "语言",
			"set.hideAccName": "隐藏帐号. 鼠标停留在[帐号]上时显示.",
			"set.hideBalance": "隐藏余额. 鼠标停留在[余额]上时显示.",
			"set.store": "商店",
			"set.showCCBtn": "显示区域切换按钮(需要登出)",
			"set.CCList": "区域列表. 将主区域放在第一位.",
			"set.showCartBtn": "总是显示购物车按钮",
			"set.cartAjax": "添加到购物车时不重新加载页面",
			"set.showSubid": "显示 SubID",
			"set.showBtnGetPrices": '显示 "获取其他地区的价格" 按钮(需要登出)',
			"set.def": "恢复默认"
		}), v.loadText({
			"lang.current": "日本語",
			"lang.code": "jp",
			getMoreInfo: "詳細",
			extInfo: "拡張機能について",
			reqErr: "リクエストエラー",
			checkin: "チェックイン",
			searchinforums: "フォーラムで探す",
			inventory: "インベントリ",
			profile: "プロフィール",
			trades: "トレード",
			chat: "チャット",
			more: "詳細",
			showDropsCard: "Show only with cards drops remaining",
			howmany: "How many? of ",
			save: "セーブ",
			get: "Get",
			checkForSend: "選択して送信",
			sendChecked: "選択したものを送信する",
			showNote: "メモを見る",
			minMarketPrice: "Min. Market price",
			hideDup: "Hide duplicates, show amount",
			go: "Go",
			checkAll: "すべて選択",
			deleteChecked: "選択を解除",
			addSubidsToCart: "Add SubIDs to cart",
			add: "Add",
			addChecked: "Add checked",
			cartHist: "Cart history",
			clearCart: "カートをリセットする",
			quickPurchase: "One-Click Buy to inventory (SteamWallet only)",
			giftForSend: "Gifts for send",
			giftForSendNote: "If you want to send Gifts to different Emails enter them below one per line. Gifts will be sent on the order. If quantity of gifts greater than address the remaining Gifts will be sent to the last address",
			sent: "送信完了",
			def: "Default",
			getPrices: "国ごとの価格を表示",
			prices: "国ごとの価格",
			viewin: "View in",
			searchin: "Search in",
			viewMyCardsGame: "View my cards/badge this game",
			adding: "adding",
			added: "Added | View in cart",
			balance: "Balance",
			acc: "Account",
			acceptAllToInv: "Accept all to inventory",
			listed: "Listed: ",
			skipped: "Skipped: ",
			skipSent: "Skip gifts sent before?",
			totop: "To top",
			"set.ext": "拡張機能",
			"set.settings": "設定",
			"set.homePage": "ホームページ",
			"set.global": "グローバル",
			"set.lang": "言語",
			"set.hideAccName": "アカウント名を非表示にする",
			"set.hideBalance": "残高を非表示にする",
			"set.store": "ストア",
			"set.showCCBtn": "Show button change country",
			"set.CCList": "Your list of countries. Enter your country first",
			"set.showCartBtn": "Always show Cart button",
			"set.cartAjax": "Adding to cart without reloading the page",
			"set.showSubid": "SubIDを表示",
			"set.showBtnGetPrices": '"国ごとの価格を表示"ボタンを表示する',
			"set.def": "Restore the default",
			"set.market": "マーケット",
			"set.marketMainPageFuncs": "Enable functions in main page of Community Market",
			"set.FixNavbar": "Fix Navbar",
			"rep.unk": "unknown",
			"rep.mdlman": "middleman",
			"rep.white": "whitelisted",
			"rep.black": "blacklisted",
			"rep.orange": "suspicious"
		}), f.$J(".submenu_community").append('<a class="submenuitem swt" href="https://steamcommunity.com/groups/SteamClientBeta#swt-settings">SWT - ' + v("set.settings") + "</a>"), _.cur.globalHideAccName) {
		var e = f.$J("#account_pulldown")[0];
		e && (e.title = e.innerHTML, e.innerHTML = "[" + v("acc") + "]")
	}
	if (_.cur.globalFixNavbar) {
		f.$J("head").append("<style>#global_header.swtfixed{position:fixed;z-index:9999;width:100%}.responsive_page_template_content.swtfixed{padding-top:50px}#global_header.swtfixed>.content{height:50px !important}#global_header.swtfixed div.logo{display:none}#global_header.swtfixed .menuitem{padding-top:15px !important}#global_header.swtfixed .supernav_container{left:0 !important}#global_header.swtfixed .header_installsteam_btn{display:none}.swtup{display:none}#global_header.swtfixed .swtup{display:block;float:left}</style>");
		var t = f.$J("#global_header");
		if (t.length) {
			t.prepend('<a class="swtup" href="#"><span class="btn_grey_white_innerfade btn_medium_wide"><span>' + v("totop") + "</span></span></a>");
			var a = t.offset().top;
			f.document.onscroll = function () {
				f.$J(window).scrollTop() > a ? (f.$J("#global_header").addClass("swtfixed"), f.$J(".responsive_page_template_content").addClass("swtfixed")) : (f.$J("#global_header").removeClass("swtfixed"), f.$J(".responsive_page_template_content").removeClass("swtfixed"))
			}
		}
	}
	for (var i = "https?://store\\.steampowered\\.com/", n = "https?://steamcommunity\\.com/", o = [{
				match: [i + "cart.*"],
				run: function () {
					var o = f.$J,
					e = document.querySelector(".page_content > .rightcol"),
					t = new Date;
					t.setTime(t.getTime() - 1),
					links = [{
							href: "javascript:document.cookie='shoppingCartGID=; path=/; expires=" + t.toGMTString() + "'; location.href='/cart/';",
							text: v("clearCart")
						}, {
							href: "https://store.steampowered.com/checkout/?purchasetype=gift#quick",
							blank: 1,
							text: v("quickPurchase")
						}
					],
					e.insertAdjacentHTML("afterBegin", function (e, t) {
						for (var a, i = "<h2>" + e + '</h2><div class="block"><div class="block_content">', n = 0; n < t.length; n++)
							i += '<a class="btn_small btnv6_blue_hoverfade" href="' + (a = t[n])
								.href + '"' + (a.blank ? ' target="_blank"' : "") + "><span>" + a.text + "</span></a><br/>";
							i += "<br/><h2>" + v("addSubidsToCart") + '</h2> <form id="addtocartsubids" method="post"><input type="hidden" name="sessionid" value="' + f.g_sessionID + '"><input type="hidden" name="action" value="add_to_cart"><input type="text" name="subids" placeholder="1, 2, 3"/><input type="submit" value="' + v("add") + '" class="btn_small btnv6_blue_hoverfade"></form><br><form id="formcarthist" method="post"><input type="submit" value="' + v("addChecked") + '" style="float:right" class="btn_small btnv6_blue_hoverfade"><h2>' + v("cartHist") + '</h2><input type="hidden" name="sessionid" value="' + f.g_sessionID + '"><input type="hidden" name="action" value="add_to_cart">';
							var o = f.localStorage.swtcarthistory && JSON.parse(f.localStorage.swtcarthistory) || [],
							r = "";
							for (n = 0; n < o.length; n++)
								r = '<input type="checkbox" name="subid[]" value="' + o[n].subid + '">  <a href="/' + (o[n].link || "sub/" + o[n].subid) + '/">' + (o[n].name || "SubID: " + o[n].subid) + '</a><br>[<a href="/sub/' + o[n].subid + '/">' + o[n].subid + "</a>] (" + (o[n].price || "N/A") + ")<br><br>" + r;
							return i += r + "</form></div></div>"
						}
							("Steam Web Tools", links)),
						o("#addtocartsubids").bind("submit", function () {
							var e,
							t = o(this),
							a = t.find('input[name="subids"]').val(),
							i = f.localStorage.swtcarthistory && JSON.parse(f.localStorage.swtcarthistory) || [];
							a = a.split(",");
							for (var n = 0; n < a.length; n++)
								e = a[n].trim(), t.append('<input type="hidden" name="subid[]" value="' + e + '"/>'), i.push({
									subid: e
								});
							for (; 20 < i.length; )
								i.shift();
							f.localStorage.swtcarthistory = JSON.stringify(i)
						})
					}
				}, {
					match: [i + "checkout/\\?purchasetype=.+"],
					run: function () {
						if (f.$("accept_ssa").checked = !0, -1 < f.location.search.indexOf("purchasetype=gift")) {
							var e;
							if (!f.$("send_self"))
								if (e = document.cookie.match(/steamRememberLogin=(\d{17})/)) {
									e = e[1];
									var a = parseInt(e.substr(-10), 10) - 7960265728,
									i = f.SelectGiftRecipient;
									f.SelectGiftRecipient = function (e, t) {
										return e != a && (f.$("send_self").checked = !1),
										i.apply(this, arguments)
									},
									f.$J("#current_friend_choice").after('<div class="cart_send_choice checkout_content"><input class="send_choice_radio" type="radio" id="send_self" name="send_method" onchange="if(this.checked)SelectGiftRecipient(' + a + ',\'\');CheckFriendDisplay();"><label for="send_self" class="send_choice_txt"> ' + v("toInventory") + "</label></div>")
								}
							f.$("send_self").checked = !0,
							f.$("send_self").onchange()
						}
					}
				}, {
					match: [i + "checkout/\\?purchasetype=gift.*"],
					run: function () {
						if ("#quick" == f.location.hash) {
							var e = f.FinalizeTransaction;
							f.FinalizeTransaction = function () {
								return f.$("accept_ssa").checked = !0,
								e.apply(this, arguments)
							};
							var t = f.OnGetFinalPriceSuccess;
							f.OnGetFinalPriceSuccess = function () {
								var e = t.apply(this, arguments);
								return f.FinalizeTransaction(),
								e
							},
							f.InitializeTransaction()
						}
					}
				}, {
					match: [i + "checkout/sendgift/.*", i + "checkout/\\?purchasetype=gift.*"],
					run: function () {
						var e = document.querySelectorAll(".friend_block.disabled");
						if (e) {
							for (var t = document.querySelectorAll(".friend_block_radio input[disabled]"), a = 0; a < e.length; a++)
								e[a].removeClassName("disabled"), t[a].disabled = !1;
							if (f.location.hash && "multisend" == f.location.hash.substr(1, 9)) {
								var i = f.location.hash.substr(11, f.location.hash.lenght);
								i = JSON.parse(decodeURIComponent(i));
								var n = document.querySelector(".checkout_tab"),
								o = [],
								r = [],
								s = "";
								a = 0;
								for (var c in i)
									o.push(c), r.push(i[c]), s += "<p>" + i[c] + ' <span id="giftN' + a + '"></span></p>', a++;
								n.innerHTML = "<p><b>" + v("giftForSend") + ": " + o.length + "</b></p>" + s,
								f.$("email_input").insertAdjacentHTML("afterEnd", "<br/><br/>" + v("giftForSendNote") + '<br/><textarea id="emails" rows=3></textarea>');
								var l = 0,
								d = [];
								f.g_gidGift = o[0];
								var m = f.SubmitGiftDeliveryForm;
								f.SubmitGiftDeliveryForm = function () {
									return f.$("send_via_email").checked && f.$("emails").value && (d = f.$("emails").value.split(/\r?\n/)).length && (f.$("email_input").value = "noreply@steampowered.com"),
									m.apply(this, arguments)
								};
								var p = f.SubmitGiftNoteForm;
								f.SubmitGiftNoteForm = function () {
									return d.length && (f.$("email_input").value = d[0]),
									p.apply(this, arguments)
								};
								var u = f.OnSendGiftSuccess;
								f.OnSendGiftSuccess = function () {
									f.$("giftN" + l).innerHTML = "- " + v("sent"),
									(f.g_gidGift = o[++l]) ? (1 < d.length && (f.$("email_input").value = d[Math.min(l, d.length - 1)]), f.SendGift()) : u.apply(this, arguments)
								}
							}
						}
					}
				}, {
					match: [i + ".*"],
					run: function () {
						var g = f.$J;
						_cc = {
							curCC: !1,
							updHTMLccList: function (e) {
								var t = "";
								_cc.ListA = _.cur.storeCCList.split(" ");
								for (var a = 0; a < _cc.ListA.length; a++)
									t += '<a class="popup_menu_item" href="' + _cc.url + _cc.ListA[a] + '"><img src="//steamcommunity-a.akamaihd.net/public/images/countryflags/' + _cc.ListA[a] + '.gif" style="width:16px"/> ' + _cc.ListA[a].toUpperCase() + "</a>";
								document.getElementById("cc_list").innerHTML = t,
								_cc.curCC = e || _cc.ListA[0]
							},
							url: String(f.location)
						},
						-1 == _cc.url.indexOf("?") ? _cc.url += "?" : _cc.url = _cc.url.replace(/\?.+/, "?"),
						_cc.url += "cc=",
						f._cc = _cc,
						function () {
							-1 < f.location.pathname.indexOf("/agecheck") && (document.cookie = "mature_content=1; path=/;", document.cookie = "birthtime=-1704124799; expires=21-Dec-2025 00:00:00 GMT; path=/", f.location.reload()),
							_.cur.globalHideWalletBalance && (u = g("#header_wallet_balance")[0]) && (u.title = u.innerHTML, u.innerHTML = "[" + v("balance") + "]"),
							_.cur.storeShowCartBtn && g("#store_header_cart_btn").css("display", "block");
							var e = document.getElementById("global_action_menu");
							if (e) {
								var t = !1;
								(t = document.cookie.match(/steamCountry=(\w{2})/i)) && (t = t[1]);
								var a = "\t\t\t\t\t<style>#cc_menu_btn{display:none;min-width:59px;z-index:999}#cc_list .popup_menu_item{white-space:nowrap}</style>\t\t\t\t\t<span class=\"pulldown\" id=\"cc_menu_btn\" onclick=\"ShowMenu(this, 'cc_menu', 'left', 'bottom', true);\">CC" + (t ? ': <img src="//steamcommunity-a.akamaihd.net/public/images/countryflags/' + t.toLowerCase() + '.gif" /> ' + t : "") + ' </span>\t\t\t<div class="popup_block_new" id="cc_menu" style="display:none;">\t\t\t<div class="popup_body popup_menu shadow_content" id="cc_list"></div></div>';
								e.insertAdjacentHTML("afterBegin", a),
								_cc.updHTMLccList(t)
							}
							_.cur.storeShowCCbtn && g("#cc_menu_btn").show();
							var i = String(f.location.href).match(/\/(sub|app)\/(\d+)/i);
							if (i) {
								var n = i[1],
								o = i[2],
								r = document.querySelectorAll(".game_area_purchase_game");
								if (_.cur.storeShowSubid || _.cur.storeShowBtnGetPrices) {
									for (var s, c, l = [], d = 0; d < r.length; d++)
										(u = r[d].querySelector('input[name="subid"]')) && (s = u.value, u = u.parentElement.parentElement, _.cur.storeShowSubid && u.insertAdjacentHTML("beforeEnd", '<div>Subscription id = <a href="https://steamdb.info/sub/' + s + '">' + s + "</a></div>"), _.cur.storeShowBtnGetPrices && (c = g("<div><a onclick=\"getPrices(event, '" + n + "', " + o + ');return false" href="#getPrices">' + v("getPrices") + "</a></div>"), u = g(u).append(c), l.push({
													subid: s,
													el: c[0]
												})));
									_.cur.storeShowBtnGetPrices && (f.getPrices = function (e, n, s) {
										function t(r) {
											var e = "app" == n ? "app" : "package",
											t = "https://store.steampowered.com/api/" + e + "details/?filters=price_overview,packages&v=1&" + e + "ids=";
											t += s + "&cc=" + r;
											var a = function (e) {
												var t = "";
												if (e[s].success) {
													var a = (e = e[s].data).price_overview || e.price;
													0 < a.discount_percent && (t += "<s>" + a.initial / 100 + '</s> <span class="discount_pct">-' + a.discount_percent + "%</span> "),
													t += "<b>" + a.final / 100 + "</b> " + a.currency,
													e.packages && (t += ' (subID:<a href="https://steamdb.info/sub/' + e.packages[0] + '">' + e.packages[0] + "</a>)");
													try {
														var i = e.package_groups[0].subs;
														if (1 < i.length)
															for (var n = 1; n < i.length; n++) {
																var o = i[n].option_text.match(/- \D*(\d+(?:[.,]\d{2})?)/i);
																document.querySelector(".swt_price_" + n + "_" + r + ">span").innerHTML = "<b>" + o[o.length - 1] + "</b> " + a.currency + ' (subID:<a href="https://steamdb.info/sub/' + i[n].packageid + '">' + i[n].packageid + "</a>)"
															}
													} catch (e) {}
												} else
													t += "N/A";
												document.querySelector(".swt_price_0_" + r + ">span").innerHTML = t
											};
											try {
												var i = window.GM_xmlhttpRequest || window.GM_xhr;
												i ? i({
													url: t,
													method: "GET",
													anonymous: !0,
													onload: function (e) {
														e = JSON.parse(e.responseText),
														a(e)
													}
												}) : (jQuery.ajaxSettings.xhr = function () {
													try {
														return new f.XMLHttpRequest({
															mozAnon: !0
														})
													} catch (e) {}
												}, g.ajax({
														url: t,
														method: "GET"
													}).done(a))
											} catch (e) {
												console.log(e)
											}
										}
										for (var a = 0; a < l.length; a++) {
											for (var i = v("prices") + ":", o = 0; o < _cc.ListA.length; o++)
												i += '<div class="swt_price_' + a + "_" + _cc.ListA[o] + '"><a href="?cc=' + _cc.ListA[o] + '"><img src="//steamcommunity-a.akamaihd.net/public/images/countryflags/' + _cc.ListA[o] + '.gif" style="width:16px"/> ' + _cc.ListA[o].toUpperCase() + "</a> <span>...</span></div>";
											l[a].el.innerHTML = i
										}
										for (o = 0; o < _cc.ListA.length; o++)
											t(_cc.ListA[o]);
										return !1
									})
								}
								var m = document.querySelector(".game_title_area .pageheader") || document.querySelector(".game_title_area .apphub_AppName"),
								p = encodeURIComponent(m.textContent.trim()),
								u = document.querySelector(".rightcol.game_meta_data");
								links = [{
										href: "https://steamdb.info/" + n + "/" + o + "/",
										icon: "https://steamdb.info/static/logos/favicon-16x16.png",
										text: v("viewin") + " SteamDB.info"
									}, {
										href: "https://www.steamprices.com/" + _cc.curCC.toLowerCase() + "/" + n + "/" + o,
										icon: "https://www.steamprices.com/assets/images/favicons/favicon-16x16.png?v=a",
										text: v("viewin") + " SteamPrices.com"
									}, {
										href: "https://plati.com/asp/find.asp?ai=111350&searchstr=" + p,
										icon: "https://plati.com/favicon.ico",
										text: v("searchin") + " Plati.com"
									}, {
										href: "https://www.steamgifts.com/giveaways/search?q=" + p,
										icon: "https://www.steamgifts.com/favicon.ico",
										text: v("searchin") + " SteamGifts.com"
									}, {
										href: "https://steambroker.com/tradeoffers.php?appid=753&refid=42362508&query=" + p,
										icon: "https://steambroker.com/favicon.ico",
										text: v("searchin") + " SteamBroker.com"
									}, {
										href: "https://steam-trader.com/games/?r=45962&text=" + p,
										icon: "https://steam-trader.com/favicon.ico",
										text: v("searchin") + " Steam-Trader.com"
									}
								],
								"app" == n && (links.push({
										href: "https://steamcommunity.com/my/gamecards/" + o,
										icon: "https://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png",
										text: v("viewMyCardsGame")
									}), links.push({
										href: "https://steamcommunity.com/market/search?q=&category_753_Game%5B%5D=tag_app_" + o + "&category_753_item_class%5B%5D=tag_item_class_2&appid=753",
										icon: "https://store.akamai.steamstatic.com/public/images/v6/ico/ico_cards.png",
										text: v("SearchCardsOnMarket")
									})),
								u.insertAdjacentHTML("afterBegin", function (e, t) {
									for (var a, i = '<div class="block">\t\t\t<div class="block_header"><h4>' + e + '</h4></div>\t\t\t<div class="block_content"><div class="block_content_inner">', n = 0; n < t.length; n++)
										a = t[n], i += '<div class="game_area_details_specs"><div class="icon"><a href="' + a.href + '"><img style="height:16px" src="' + a.icon + '"></a></div><a class="name" href="' + a.href + '">' + a.text + "</a></div>";
									return i += "</div></div></div>"
								}
									("Steam Web Tools", links));
								var h = f.addToCart;
								f.addToCart = function (e) {
									var t = g('[name="add_to_cart_' + e + '"]'),
									a = t.parent(),
									i = f.localStorage.swtcarthistory && JSON.parse(f.localStorage.swtcarthistory) || [];
									if (20 <= i.length && i.shift(), i.push({
											subid: e,
											name: a.find("h1").text().match(/\S+\s(.+)/i)[1],
											price: a.find(".game_purchase_price.price").text().trim() || a.find(".discount_final_price").text().trim(),
											link: n + "/" + o
										}), f.localStorage.swtcarthistory = JSON.stringify(i), !_.cur.storeCartAjax)
										return h.apply(this, arguments);
									a.find(".game_purchase_action_bg .btn_addtocart:last>a").after('<a id="swtcartdone" href="#">' + v("adding") + "</a>"),
									g.ajax({
										url: t.attr("action"),
										type: "POST",
										data: {
											subid: e,
											action: "add_to_cart",
											sessionid: f.g_sessionID
										}
									}).done(function (e) {
										a.find("#swtcartdone").css("background-image", "none").text("✔ " + v("added")).attr("href", "/cart/")
									})
								},
								u = g({
										app: ".game_header_image_full",
										sub: ".package_header"
									}
										[n]).wrap(g('<a href="#viewlogos" title="View Logos"></a>').click(function () {
											for (var e = ["capsule_616x353", "header", "header_586x192", "header_292x136", "capsule_231x87", "capsule_184x69", "capsule_sm_120"], t = "", a = 0; a < e.length; a++)
												t += '<img src="https://cdn.akamai.steamstatic.com/steam/' + n + "s/" + o + "/" + e[a] + '.jpg"><br>';
											return f.ShowDialog(v("Logos"), g(t)),
											!1
										}))
							} else
								g(".icon.discounts").parent().after('<a class="gutter_item" href="https://steamdb.info/sales/"><span class="icon discounts"></span><span> SteamDB.Info/Sales</span></a>')
						}
						()
					}
				}, {
					match: [n + "id/[^/]+/?", n + "profiles/\\d+/?"],
					run: function () {
						var u,
						h = f.$J;
						function r(e) {
							document.querySelector(e).insertAdjacentHTML("afterBegin", '<div id="swt_badges"><a id="csmbadge" class="badge" href="http://checkrep.ru/#steam:' + u + '">CRep: <span></sapn></a> <a id="srbadge" class="badge" href="https://steamrep.com/profiles/' + u + '">SR: <span></sapn></a></div>');
							var i = {
								0: {
									text: "rep.unk",
									color: "606060"
								},
								1: {
									text: "rep.mdlman",
									color: "5E931B"
								},
								2: {
									text: "rep.white",
									color: "247E9E"
								},
								3: {
									text: "rep.black",
									color: "9E2424"
								},
								4: {
									text: "rep.orange",
									color: "B47200"
								},
								error: {
									text: "Error",
									color: "606060"
								}
							};
							try {
								(window.GM_xmlhttpRequest || window.GM_xhr)({
									method: "GET",
									url: "http://checkrep.ru/api/swt9Hk02yFhf/0/repforext2/" + u,
									onload: function (e) {
										var t,
										a;
										0 <= (t = JSON.parse(e.responseText)).csm || (t.csm = "error"),
										h("#csmbadge")[0].style.background = "#" + i[t.csm].color,
										h("#csmbadge span").text(v(i[t.csm].text)),
										t.srcom ? a = -1 < t.srcom.indexOf("SCAMMER") ? i[3].color : -1 < t.srcom.indexOf("CAUTION") ? i[4].color : -1 < t.srcom.indexOf("MIDDLEMAN") ? i[1].color : -1 < t.srcom.indexOf("TRUSTED SELLER") || -1 < t.srcom.indexOf("ADMIN") ? i[2].color : i[0].color : (t.srcom = v(i[0].text), a = i[0].color),
										h("#srbadge")[0].style.background = "#" + a,
										h("#srbadge span").text(t.srcom),
										h("#swt_badges").show()
									}
								})
							} catch (e) {
								console.log(e)
							}
						}
						f.g_rgProfileData && function () {
							f.$J(".profile_header_badgeinfo_badge_area .persona_level").unwrap();
							var e = [{
									href: "http://checkrep.ru/#steam:" + (u = f.g_rgProfileData.steamid),
									icon: "https://images.weserv.nl/?url=www.iconsdb.com/icons/preview/gray/checkmark-xxl.png",
									text: v("checkin") + " CheckRep.ru"
								}, {
									href: "https://steamrep.com/profiles/" + u,
									icon: "https://steamrep.com/favicon.ico",
									text: v("checkin") + " SteamRep.com"
								}, {
									hr: !0
								}, {
									href: "https://forums.steamrep.com/search/search?keywords=" + u,
									icon: "https://steamrep.com/favicon.ico",
									text: v("searchinforums") + " SteamRep.com"
								}, {
									href: "https://www.google.com/#q=" + u + " inurl:sourceop.com",
									icon: "https://images.weserv.nl/?url=www.sourceop.com/themes/hl2/images/favicon.ico",
									text: v("searchinforums") + " SourceOP.com"
								}, {
									href: "https://www.steamtrades.com/user/" + u,
									icon: "https://cdn.steamtrades.com/img/favicon.ico",
									text: v("profile") + " SteamTrades.com"
								}, {
									hr: !0
								}, {
									href: "https://backpack.tf/profiles/" + u,
									icon: "https://backpack.tf/favicon_440.ico",
									text: v("inventory") + " Backpack.tf"
								}, {
									href: "https://tf2b.com/tf2/" + u,
									icon: "https://tf2b.com/favicon.ico",
									text: v("inventory") + " TF2B.com"
								}, {
									href: "https://tf2outpost.com/backpack/" + u,
									icon: "https://cdn.tf2outpost.com/img/favicon-440.ico",
									text: v("inventory") + " TF2OutPost.com"
								}, {
									hr: !0
								}, {
									href: "https://tf2outpost.com/user/" + u,
									icon: "https://cdn.tf2outpost.com/img/favicon-440.ico",
									text: v("trades") + " TF2OutPost.com"
								}, {
									href: "https://dota2lounge.com/profile?id=" + u,
									icon: "https://dota2lounge.com/favicon.ico",
									text: v("trades") + " Dota2Lounge.com"
								}, {
									href: "https://csgolounge.com/profile?id=" + u,
									icon: "https://csgolounge.com/favicon.ico",
									text: v("trades") + " CSGOLounge.com"
								}, {
									href: "https://steam.tools/itemvalue/#/" + u + "-730",
									icon: "https://steam.tools/favicon.ico",
									text: v("inventory") + " Steam.tools/itemvalue/"
								}, {
									hr: !0
								}
							];
							document.body.insertAdjacentHTML("afterBegin", "<style>#swt_badges{display:none;position:absolute;top:7px}.badge{border-radius:3px;box-shadow:1px 1px 0px 0px #1D1D1D;font-size:.7em;padding:3px}#swt_info{position:absolute;top:201px}</style>"),
							h(".profile_header").append('<div id="swt_info">SteamID64: <a href="https://steamcommunity.com/profiles/' + u + '">' + u + '</a> | <a href="#getMoreInfo" onclick="getMoreInfo();return false">' + v("getMoreInfo") + "</a></div>"),
							r(".profile_header"),
							f.getMoreInfo = function () {
								var p = f.ShowDialog(v("extInfo"), h('<div id="swtexinfo"><img src="https://cdn.steamcommunity.com/public/images/login/throbber.gif"></div>'));
								f.setTimeout(function () {
									p.AdjustSizing()
								}, 1),
								h.ajax({
									url: f.location.href + "?xml=1",
									context: document.body,
									dataType: "xml"
								}).done(function (e, t, a) {
									var i = h(a.responseXML),
									n = i.find("isLimitedAccount").text(),
									o = i.find("tradeBanState").text(),
									r = i.find("vacBanned").text(),
									s = i.find("memberSince").text(),
									c = parseInt(u.substr(-10), 10),
									l = c % 2,
									d = c - 7960265728;
									function m(e, t) {
										return "<tr><td><b>" + e + "</b></td><td>" + t + "</td>"
									}
									c = "STEAM_0:" + l + ":" + (d - l) / 2,
									h("#swtexinfo").html("<table>" + m("CommunityID", u) + m("SteamID", c) + m("AccountID", d) + m("Registration date", s) + m("VAC", "0" == r ? "Clear" : "Banned") + m("Trade Ban", o) + m("Is Limited Account", "0" == n ? "No" : "Yes") + "</table>"),
									f.setTimeout(function () {
										p.AdjustSizing()
									}, 1)
								}).fail(function () {
									h("#swtexinfo").html(v("reqErr"))
								})
							};
							try {
								var t = h('.profile_header_actions>a.btn_profile_action[href^="javascript:OpenFriendChat"]')[0];
								t.outerHTML = '<span class="btn_profile_action btn_medium"><span><a href="steam://friends/message/' + u + '">' + v("chat") + ': Steam</a> | <a href="' + t.href + '">Web</a></span></span>'
							} catch (e) {}
							var a = document.querySelector('.profile_count_link a[href$="inventory/"]');
							a && a.insertAdjacentHTML("afterEnd", ': <span class="linkActionSubtle"><a title="Steam Gifts" href="' + a.href + '#753_1"><img src="https://images.weserv.nl/?url=iconsearch.ru/uploads/icons/basicset/16x16/present_16.png"/></a> <a title="Steam Cards" href="' + a.href + '#753_6"><img width="26" height="16" src="https://images.weserv.nl/?url=store.akamai.steamstatic.com/public/images/ico/ico_cards.png"/></a> <a title="TF2" href="' + a.href + '#440"><img src="https://images.weserv.nl/?url=media.steampowered.com/apps/tf2/blog/images/favicon.ico"/></a> <a title="Dota 2" href="' + a.href + '#570"><img src="https://www.dota2.com/images/favicon.ico"/></a> <a title="CSGO" href="' + a.href + '#730"><img src="https://images.weserv.nl/?url=blog.counter-strike.net/wp-content/themes/counterstrike_launch/favicon.ico"/></a></span>');
							for (var i, n = "", o = 0; o < e.length; o++)
								(i = e[o]).hr ? n += "<hr/>" : n += '<a class="popup_menu_item" href="' + i.href + '"><img style="width:18px;height:18px" src="' + i.icon + '"> ' + i.text + "</a>";
							try {
								document.querySelector("#profile_action_dropdown>.popup_body.popup_menu").insertAdjacentHTML("afterBegin", n)
							} catch (e) {
								h(".profile_header_actions").append("<span class=\"btn_profile_action btn_medium\" onclick=\"ShowMenu(this,'profile_action_dropdown','right')\"><span>" + v("more") + ' <img src="https://cdn.steamcommunity.com/public/images/profile/profile_action_dropdown.png"/></span></span><div class="popup_block" id="profile_action_dropdown" style="visibility:visible;display:none"><div class="popup_body popup_menu">' + n + "</div></div>")
							}
						}
						()
					}
				}, {
					match: [n + "id/.+?/inventory.*", n + "profiles/\\d+/inventory.*"],
					run: function () {
						var d = f.$J;
						if (f.g_strInventoryLoadURL) {
							if (!f.CInventory.prototype.LoadCompleteInventory)
								return;
							!function () {
								var a = "swt_notdup",
								i = {
									descriptions: []
								};
								if (f.getSubid = function (e) {
									i.element = e;
									var t = f.g_ActiveInventory.selectedItem;
									i.classid = t.classid,
									i.giftId = t.assetid,
									i.giftName = encodeURIComponent(t.description.name),
									new f.Ajax.Request("//steamcommunity.com/gifts/" + i.giftId + "/validateunpack", {
										method: "post",
										parameters: {
											sessionid: f.g_sessionID
										},
										onSuccess: function (e) {
											f.setSubID(e.responseJSON.packageid)
										}
									})
								}, f.setSubID = function (e) {
									var t = 'SubscriptionID = <a href="https://steamdb.info/sub/' + e + '">' + e + "</a>";
									i.element.outerHTML = t;
									var a = i.descriptions[i.classid];
									a[a.length - 1] = {
										value: t,
										type: "html"
									},
									a.withSubid = !0
								}, document.body.insertAdjacentHTML("afterBegin", "<style>.checkedForSend{background:#366836!important}.itemcount{background:#292929;color:#FFF;font-weight:700;position:absolute;right:0;top:0}.swt_icon{position:absolute;top:0;left:0}.swt_icon-st{background:#CF6A32;color:#fff}.swt_icon-t{background:#FDEC14;color:#000}#inventory_logos{display:none}.swt_hidden{display:none}</style>"), f.checkedForSend = {}, f.checkForSend = function (e) {
									var t = f.g_ActiveInventory.selectedItem;
									if (t.checkedForSend)
										if (t.checkedForSend = !1, t.element.removeClassName("checkedForSend"), 1 < t._amount)
											for (var a = 0; a < t._amount; a++)
												delete f.checkedForSend[t._ids[a]];
										else
											delete f.checkedForSend[e];
									else {
										var i = 1;
										if (1 < t._amount && (i = parseInt(prompt(v("howmany") + t._amount, t._amount)) || 1) > t._amount && (i = t._amount), 1 < i)
											if (confirm(v("Skip sent?")))
												for (a = 0; a < i; a++) {
													var n = t._subItems[a],
													o = !1;
													if (n.description.owner_descriptions)
														for (var r = 0; r < n.description.owner_descriptions.length; r++)
															if (n.description.owner_descriptions[r].value.match(/data-miniprofile=|\S+@\S+/i)) {
																o = !0;
																break
															}
													o || (f.checkedForSend[t._subItems[a].assetid] = t.description.name, t._subItems[a].element.addClassName("checkedForSend"))
												}
											else
												for (var a = 0; a < i; a++)
													f.checkedForSend[t._ids[a]] = t.description.name, t._subItems[a].element.addClassName("checkedForSend");
											else
												f.checkedForSend[e] = t.description.name, t.checkedForSend = !0, t.element.addClassName("checkedForSend")
										}
									}, f.sendChecked = function () {
										var e = "https://store.steampowered.com/checkout/sendgift/";
										for (var t in f.checkedForSend)
											break;
										e += t + "#multisend=" + encodeURIComponent(JSON.stringify(f.checkedForSend)),
										f.location.href = e
									}, f.g_bViewingOwnProfile) {
										var t = f.localStorage.giftsNotes;
										t = t ? JSON.parse(t) : {},
										f.loadGiftNote = function () {
											var e = f.g_ActiveInventory.selectedItem.assetid;
											d("#iteminfo" + f.iActiveSelectView + "_item_tags_content textarea.giftnote").length || d("#iteminfo" + f.iActiveSelectView + "_item_tags_content").append('<br/><textarea class="giftnote" style="width:100%">' + (t[e] || "") + "</textarea><button onclick=\"saveGiftNote('" + e + "')\">" + v("save") + "</button>")
										},
										f.saveGiftNote = function (e) {
											t[e] = d("#iteminfo" + f.iActiveSelectView + "_content textarea.giftnote").val(),
											f.localStorage.giftsNotes = JSON.stringify(t)
										};
										var e = d("div.pending_gift:first");
										e.length && (e.before('<a id="swt_acceptAllGifts" class="btn_darkblue_white_innerfade btn_medium new_trade_offer_btn" href="#"><span>' + v("acceptAllToInv") + "</span></a>"), d("#swt_acceptAllGifts").click(function (e) {
												e.preventDefault();
												var t = d("div.pending_gift");
												if (t.length) {
													var a;
													t = t.find('>div[id^="pending_gift_"]');
													for (var i = 0; i < t.length; i++)
														a = t[i].id.split("_")[2], DoAcceptGift(a, !1)
												}
											}))
									}
								var n = f.BuildHover;
								if (f.BuildHover = function (e, t, a) {
									return f.g_ActiveInventory && 753 == f.g_ActiveInventory.appid && (1 != t.contextid || t.description && t.description.descriptions && t.description.descriptions.withClassid || (t.description.descriptions || (t.description.descriptions = []), t.description.descriptions.withClassid = !0, t.description.descriptions.push({
												value: "ClassID = " + t.classid
											}), f.g_bViewingOwnProfile && t.description.descriptions.push({
												value: '<a href="#" onclick="getSubid(event.target);return false">' + v("get") + " SubscriptionID</a>",
												type: "html"
											}), i.descriptions[t.classid] || (i.descriptions[t.classid] = t.description.descriptions), t.description.owner_actions && (t.description.owner_actions.push({
													link: 'javascript:checkForSend("%assetid%")',
													name: v("checkForSend")
												}), t.description.owner_actions.push({
													link: "javascript:sendChecked()",
													name: v("sendChecked")
												}), t.description.owner_actions.push({
													link: "javascript:loadGiftNote()",
													name: v("showNote")
												})))),
									n.apply(this, arguments)
								}, !f.g_bViewingOwnProfile) {
									var o = f.PopulateMarketActions;
									f.PopulateMarketActions = function (e, a) {
										var t = o.apply(this, arguments),
										i = a.description;
										if (!i.marketable)
											return t;
										var n = i.market_hash_name || i.market_name;
										return e.appendChild(f.CreateMarketActionButton("blue", "https://steamcommunity.com/market/listings/" + a.appid + "/" + n, v("minMarketPrice") + ': <span id="swt_lowestItemPrice_' + a.classid + '">?</span>')),
										d(e).css("display", "block"),
										d.ajax({
											url: "//steamcommunity.com/market/priceoverview/",
											type: "GET",
											data: {
												country: f.g_strCountryCode,
												currency: void 0 !== f.g_rgWalletInfo ? f.g_rgWalletInfo.wallet_currency : 1,
												appid: a.appid,
												market_hash_name: n
											}
										}).done(function (e) {
											var t = v("reqErr");
											e.success && (t = e.lowest_price),
											d("#swt_lowestItemPrice_" + a.classid).html(t)
										}).fail(function (e) {
											d("#swt_lowestItemPrice_" + a.classid).text(v("reqErr"))
										}),
										t
									}
								}
								f.Filter.UpdateTagFiltering_old = f.Filter.UpdateTagFiltering,
								f.Filter.UpdateTagFiltering = function (e) {
									return f.localStorage.hideDupItems && (e.SWT = [a]),
									this.UpdateTagFiltering_old.apply(this, arguments)
								},
								f.Filter.MatchItemTags_old = f.Filter.MatchItemTags,
								f.Filter.MatchItemTags = function (e, t) {
									return t && t[0] == a ? 0 < e.rgItem._amount || 1 < e.rgItem.amount : this.MatchItemTags_old.apply(this, arguments)
								},
								f.CInventory.prototype.show_old = f.CInventory.prototype.show,
								f.CInventory.prototype.show = function () {
									var e = f.CInventory.prototype.show_old.apply(this, arguments);
									return r(),
									e
								};
								var r = function () {
									f.localStorage.hideDupItems ? (f.Filter.rgCurrentTags.SWT = [a], f.g_ActiveInventory.LoadCompleteInventory().done(function () {
											f.Filter.OnFilterChange(),
											f.g_ActiveInventory._hideDupCounters ? d(".itemcount", f.g_ActiveInventory.m_$Inventory).show() : (d(".itemcount", f.g_ActiveInventory.m_$Inventory).each(function (e, t) {
													var a,
													i = d(t);
													if (f.g_ActiveInventory.m_rgChildInventories)
														for (var n in a = {}, f.g_ActiveInventory.m_rgChildInventories)
															d.extend(a, f.g_ActiveInventory.m_rgChildInventories[n]._firstItems);
													else
														a = f.g_ActiveInventory._firstItems;
													i.text("x" + a[i.data("classid")]._amount).show()
												}), f.g_ActiveInventory._hideDupCounters = !0)
										})) : (delete f.Filter.rgCurrentTags.SWT, f.Filter.rgLastTags.SWT = [a], f.Filter.OnFilterChange(), d(".itemcount").hide()),
									f.g_ActiveInventory.selectedItem && f.g_ActiveInventory.EnsurePageActiveForItem(f.g_ActiveInventory.selectedItem.element)
								};
								f.onchangehidedup = function (e) {
									e.target.checked ? f.localStorage.hideDupItems = 1 : f.localStorage.removeItem("hideDupItems"),
									r()
								};
								var s = function () {
									f.g_ActiveInventory && f.g_ActiveInventory.m_bActive ? r() : setTimeout(s, 1e3)
								};
								s(),
								f.CInventory.prototype.BuildItemElement_old = f.CInventory.prototype.BuildItemElement,
								f.CInventory.prototype.BuildItemElement = function (e) {
									var t,
									a = f.CInventory.prototype.BuildItemElement_old.apply(this, arguments);
									if (730 == e.appid) {
										for (var i = '<div class="swt_icon">', n = e.description.tags, o = 0; o < n.length; o++)
											switch (n[o].category) {
											case "Quality":
												switch (n[o].internal_name) {
												case "strange":
													i += '<span class="swt_icon-st">ST</span>';
													break;
												case "unusual":
													a.css("border-color", "#" + n[o].color),
													n.colored = !0;
													break;
												case "tournament":
													i += '<span class="swt_icon-t">S</span>'
												}
												break;
											case "Rarity":
												n.colored || a.css("border-color", "#" + n[o].color)
											}
										a.append(i + "</div>")
									}
									if (!e.is_stackable)
										return this._firstItems || (this._firstItems = {}), (t = this._firstItems[e.classid]) ? (t._amount++, t._ids.push(e.assetid), t._subItems.push(e)) : (e._amount = 1, e._is_stackable = !0, e._subItems = [e], e._ids = [e.assetid], this._firstItems[e.classid] = e, a.append('<div class="itemcount" data-classid="' + e.classid + '"></div>'), e.description.tags.push({
												category: "SWT",
												internal_name: "swt_notdup",
												localized_category_name: "Steam Web Tools",
												localized_tag_name: "Hide Dup"
											})), a
								},
								f.CInventory.prototype.SetActivePage_old = f.CInventory.prototype.SetActivePage,
								f.CInventory.prototype.SetActivePage = function (e) {
									e >= this.m_cPages || (this.m_rgPages[this.m_iCurrentPage].hide(), this.m_rgPages[e].show(), this.m_iCurrentPage = e, this.UpdatePageCounts(), this.PreloadPageImages(this.m_iCurrentPage))
								},
								d("#inventory_pagecontrols").before('<label><input type="checkbox" name="hidedup" onchange="window.onchangehidedup(event)" ' + (f.localStorage.hideDupItems ? 'checked="true"' : "") + "/>" + v("hideDup") + "</label>"),
								setTimeout(function () {
									if (f.SortItem) {
										var e = f.SortItem;
										f.SortItem = function () {
											f.$J("#Lnk_SortItems").data("asc") && e.apply(f, arguments)
										}
									}
								}, 1500),
								d("#market_sell_dialog_accept_ssa").prop("checked", !0),
								d("#market_sell_dialog_input_area").before('<div style="text-align:right;margin-bottom:0.5em;"><a href="#" id="swt_setpricebtn">[' + v("setlowestprice") + " -0,01]</a></div>"),
								d("#swt_setpricebtn").click(function (e) {
									e.preventDefault();
									var t = f.SellItemDialog.m_item,
									a = GetMarketHashName(t.description);
									new f.Ajax.Request("//steamcommunity.com/market/priceoverview/", {
										method: "get",
										parameters: {
											country: f.g_strCountryCode,
											currency: void 0 !== f.g_rgWalletInfo ? f.g_rgWalletInfo.wallet_currency : 1,
											appid: t.appid,
											market_hash_name: a
										},
										onSuccess: function (e) {
											if (e.responseJSON && e.responseJSON.success) {
												var t = f.GetPriceValueAsInt(e.responseJSON.lowest_price);
												t--,
												d("#market_sell_buyercurrency_input").val(f.v_currencyformat(t, f.GetCurrencyCode(f.g_rgWalletInfo.wallet_currency))),
												f.SellItemDialog.OnBuyerPriceInputKeyUp()
											}
										}
									})
								});
								var c = {};
								c.el = d("#market_sell_dialog_item_availability_hint>.market_dialog_topwarning"),
								c.orgnText = c.el.text(),
								f.SellItemDialog.OnConfirmationAccept_old = f.SellItemDialog.OnConfirmationAccept;
								var l = f.SellCurrentSelection;
								f.SellCurrentSelection = function () {
									c.el.text(c.orgnText);
									var e = l.apply(this, arguments),
									t = f.g_ActiveInventory.selectedItem._amount;
									if (f.$("market_sell_dialog_ok").stopObserving(), d("#market_sell_dialog_ok").unbind(), 1 < t) {
										var a = parseInt(prompt(v("howmany") + t, t)) || 1;
										1 < (a = Math.min(a, t)) ? (f.SellItemDialog._amount = a, f.SellItemDialog._itemNum = 0, f.SellItemDialog._itemsFailNum = 0, f.SellItemDialog.OnConfirmationAccept_new = function (e) {
											var t;
											for (f.$("market_sell_dialog_error").hide(), f.$("market_sell_dialog_ok").fade({
													duration: .25
												}), f.$("market_sell_dialog_back").fade({
													duration: .25
												}), f.$("market_sell_dialog_throbber").show(), f.$("market_sell_dialog_throbber").fade({
													duration: .25,
													from: 0,
													to: 1
												}); t = f.SellItemDialog.m_item._subItems[f.SellItemDialog._itemNum], f.SellItemDialog._itemNum++, !t.description.marketable; );
											f.SellItemDialog.m_item.assetid = t.assetid,
											d.ajax({
												url: "https://steamcommunity.com/market/sellitem/",
												type: "POST",
												data: {
													sessionid: f.g_sessionID,
													appid: f.SellItemDialog.m_item.appid,
													contextid: f.SellItemDialog.m_item.contextid,
													assetid: f.SellItemDialog.m_item.assetid,
													amount: f.SellItemDialog.m_nConfirmedQuantity,
													price: f.SellItemDialog.m_nConfirmedPrice
												},
												crossDomain: !0,
												xhrFields: {
													withCredentials: !0
												}
											}).done(function (e) {
												if (c.el.text(v("listed") + f.SellItemDialog._itemNum + " / " + a + (f.SellItemDialog._itemsFailNum ? " | " + v("skipped") + f.SellItemDialog._itemsFailNum : "")), !(f.SellItemDialog._itemNum >= f.SellItemDialog._amount))
													return f.SellItemDialog.OnConfirmationAccept_new.apply(f.SellItemDialog, arguments);
												f.SellItemDialog.OnSuccess.apply(f.SellItemDialog, [{
															responseJSON: e
														}
													])
											}).fail(function (e) {
												var t = d.parseJSON(e.responseText);
												if (f.SellItemDialog._itemsFailNum++, !(f.SellItemDialog._itemNum >= f.SellItemDialog._amount))
													return f.SellItemDialog.OnConfirmationAccept_new.apply(f.SellItemDialog, arguments);
												f.SellItemDialog.OnFailure({
													responseJSON: t
												})
											})
										}, f.SellItemDialog.OnConfirmationAccept = f.SellItemDialog.OnConfirmationAccept_new) : f.SellItemDialog.OnConfirmationAccept = f.SellItemDialog.OnConfirmationAccept_old
									} else
										f.SellItemDialog.OnConfirmationAccept = f.SellItemDialog.OnConfirmationAccept_old;
									return d("#market_sell_dialog_ok").on("click", d.proxy(f.SellItemDialog.OnConfirmationAccept, f.SellItemDialog)),
									e
								}
							}
							()
						}
					}
				}, {
					match: [n + "id/.+?/gamecards/\\d+.*", n + "profiles/\\d+/gamecards/\\d+.*"],
					run: function () {
						var n = f.$J,
						e = f.location.pathname.match(/\/gamecards\/(\d+)/)[1];
						if (n(".gamecards_inventorylink").append('<a class="btn_grey_grey btn_small_thin" href="https://www.steamcardexchange.net/index.php?inventorygame-appid-' + e + '"><span>www.SteamCardExchange.net</span></a> '), n(".badge_craft_button").length) {
							f.craftAllAvailable = function () {
								var e = n(".badge_card_set_text_qty").text().match(/\d+/g).min(),
								t = 0,
								a = 0,
								i = [];
								return f.FinishCraft_old = f.FinishCraft,
								f.FinishCraft = function () {
									a ? 1 == a && (g_rgBadgeCraftData && g_bBadgeCraftAnimationReady && a++, f.FinishCraft_old()) : f.g_rgBadgeCraftData && (t++, i = i.concat(f.g_rgBadgeCraftData.rgDroppedItems), e <= t ? (a = 1, o && f.parent.swt_craftBadgeDone(), f.g_rgBadgeCraftData.rgDroppedItems = i, f.FinishCraft()) : n(".badge_craft_button").click())
								},
								n(".badge_craft_button").click(),
								!1
							};
							var o = !1;
							"#swt_craft" == f.location.hash && (o = !0, f.craftAllAvailable()),
							n(".gamecards_inventorylink").prepend('<div style="float:right;margin-left:5px" class="btn_grey_black btn_small_thin" onclick="craftAllAvailable()"><span>' + v("craftAllAvailable") + "</span></div>")
						}
					}
				}, {
					match: [n + "id/.+?/badges.*", n + "profiles/\\d+/badges.*"],
					run: function () {
						var i = f.$J;
						i(".badge_details_set_favorite").append('<div class="btn_grey_black btn_small_thin" onclick="swt_showWithDrop()"><span>' + v("showDropsCard") + "</span></div> "),
						f.swt_showWithDrop = function () {
							return i(".badge_row").filter(function (e, t) {
								return !i("a.btn_green_white_innerfade", t).length
							}).remove(),
							!1
						},
						i(".badge_craft_button").length && (f.swt_craftBadgeDone = function () {
							--f.swt_badgesCount <= 0 && (alert(v("done")), f.location.reload())
						}, f.swt_craftAllAvailableBadges = function () {
							var e = i(".badge_craft_button").parents(".badge_row.is_link"),
							t = e.length;
							t && (f.swt_badgesCount = t, e.find("a.badge_row_overlay").each(function (e, t) {
									var a = i(t);
									a.replaceWith('<iframe scrolling="no" class="badge_row_overlay" style="width:100%;height:100%;overflow:hidden;z-index:5;"src="' + a.attr("href") + '#swt_craft"></iframe>')
								}))
						}, i(".badge_details_set_favorite").append('<div class="btn_grey_black btn_small_thin" onclick="swt_craftAllAvailableBadges()"><span>' + v("craftAllAvailable") + "</span></div> "))
					}
				}, {
					match: [n + "app/\\d+/guides.*"],
					run: function () {
						f.$J(".workshopItemCollection").wrap(function () {
							var e = f.$J(this),
							t = e.attr("onclick").match(/href='(.+)'/)[1];
							return e.attr("onclick", !1),
							"<a href='" + t + "'></a>"
						})
					}
				}, {
					match: [n + "market.*"],
					run: function () {
						function e() {
							f.$J(".market_listing_cancel_button a").each(function (e, t) {
								var a = decodeURIComponent(String(t.href)).match(/mylisting', '(\d+)', (\d+), '(\d+)', '(\d+)'/i);
								a && (f.$J(t).before('<span class="item_market_action_button_contents"><input type="checkbox" class="lfremove" data-listingid="' + a[1] + '"/></span>'), f.$J(t).remove())
							})
						}
						function t() {
							f.$J("#tabContentsMyListings .market_home_listing_table:nth-child(1) .market_listing_table_header>.market_listing_edit_buttons").html('<a href="#checkAllListings" id="btnCheckAllListings" class="item_market_action_button item_market_action_button_blue"><span class="item_market_action_button_edge item_market_action_button_left"></span><span class="item_market_action_button_contents">' + v("checkAll") + '</span><span class="item_market_action_button_edge item_market_action_button_right"></span></a> <a href="#removeListings" id="btnRemoveListings" class="item_market_action_button item_market_action_button_green"><span class="item_market_action_button_edge item_market_action_button_left"></span><span class="item_market_action_button_contents">' + v("deleteChecked") + '</span><span class="item_market_action_button_edge item_market_action_button_right"></span></a>'),
							f.$J("#btnCheckAllListings").click(function () {
								return f.$J(".lfremove").attr("checked", !f.$J(".lfremove:first")[0].checked),
								!1
							}),
							f.$J("#btnRemoveListings").click(function () {
								var a = [];
								return f.$J(".lfremove").each(function (e, t) {
									t.checked && a.push(t)
								}),
								a.length && function e(t) {
									t < a.length && new f.Ajax.Request("//steamcommunity.com/market/removelisting/" + f.$J(a[t]).data("listingid"), {
										method: "post",
										parameters: {
											sessionid: f.g_sessionID
										},
										onComplete: function () {
											e(++t)
										},
										onSuccess: function () {
											a[t].parentElement.parentElement.parentElement.parentElement.remove()
										}
									})
								}
								(0),
								!1
							}),
							e()
						}
						function a() {
							f.$J("#searchResults_btn_next").after(' <input id="swt_gotopagevl" type="text" value="1" size="3"/><span class="pagebtn" id="swt_gotopagebtn">' + v("go") + "</span>"),
							f.$J("#swt_gotopagebtn").click(function () {
								f.g_oSearchResults.GoToPage(f.$("swt_gotopagevl").value - 1)
							})
						}
						var i;
						_.cur.globalHideWalletBalance && (i = f.$J("#marketWalletBalanceAmount")[0]) && (i.title = i.innerHTML, i.innerHTML = "[" + v("balance") + "]"),
						(i = f.$J(".pick_and_sell_button").length) ? _.cur.marketMainPageFuncs && (document.body.insertAdjacentHTML("afterBegin", "<style>.scrollbl{max-height:500px;overflow-y:scroll;} .lfremove{display:inline-block}</style>"), t(), f.g_oMyListings.SetResponseHandler(function () {
								setTimeout(e, 300)
							})) : document.getElementById("searchResults") ? a() : document.getElementById("largeiteminfo_item_name") && (f.$J("#market_buynow_dialog_accept_ssa, #market_buyorder_dialog_accept_ssa").prop("checked", !0), a(), t(), f.$J("#searchResultsRows .market_listing_item_name_block").each(function (e, t) {
								$J(t).prepend('<div style="float:right">#' + (e + 1) + "</div>")
							}))
					}
				}, {
					match: [n + "groups/SteamClientBeta#swt-settings"],
					run: function () {
						var r = f.$J;
						r("#group_tab_content_overview").show().attr("id", "swt_content1"),
						r("head").append(r('<link href="https://steamcommunity-a.akamaihd.net/public/css/skin_1/groupadmin.css" rel="stylesheet" type="text/css">')),
						r(".grouppage_logo").css("background-image", "none"),
						r(".grouppage_logo>img")[0].src = "https://v1t.su/projects/steam/webtools/imgs/steam-big-icon.png",
						r(".grouppage_header_label").text("Steam " + v("set.ext")),
						r(".grouppage_header_name").html('Steam Web Tools <span class="grouppage_header_abbrev" style="font-size:21px">' + v("set.settings") + "</span>"),
						r(".grouppage_join_area a")[0].href = "https://v1t.su/projects/steam/webtools/",
						r(".grouppage_join_area a span").text(v("set.homePage")),
						r(".grouppage_friendsingroup").remove(),
						r(".grouppage_member_tiles").remove(),
						r(".group_tabs").remove(),
						r(".rightcol ").remove();
						var s = function (e) {
							var t,
							a,
							i,
							n,
							o = "";
							for (s.fields = [], i = 0; i < e.length; i++) {
								for (o += s.create_groupStart(e[i].group), t = e[i].rows, n = 0; n < t.length; n++)
									a = t[n], s.fields.push(a.name), a.value = _.cur[a.name], o += '<div class="formRow">', o += s["create_" + a.type](a), o += "</div>";
								o += s.create_groupEnd()
							}
							r(".maincontent>.leftcol ")[0].innerHTML = '<form class="smallForm" id="editForm" name="editForm">' + o + '<div class="group_content_bodytext"><div class="forum_manage_actions"><a href="#swt-settings" class="btn_grey_white_innerfade btn_medium" id="swt_btnDef"><span>' + v("set.def") + '</span></a><button type="submit" class="btn_green_white_innerfade btn_medium"><span>' + v("save") + "</span></button></div></div></form>"
						};
						s.create_groupStart = function (e) {
							return '<div class="group_content group_summary"><div class="formRow"><h1>' + e + "</h1></div>"
						},
						s.create_groupEnd = function () {
							return "</div>"
						},
						s.create_checkbox = function (e) {
							return '<input type="checkbox"' + (e.value ? ' checked="checked"' : "") + ' name="' + e.name + '" id="' + e.name + '"><label for="' + e.name + '">' + e.title + "</label>"
						},
						s.create_select = function (e) {
							for (var t = '<div class="formRowTitle">' + e.title + '</div><div class="formRowFields"><select name="' + e.name + '" id="' + e.name + '" class="gray_bevel">', a = e.options, i = 0; i < a.length; i++)
								t += '<option value="' + a[i].value + '"' + (a[i].value == e.value ? ' selected="selected"' : "") + ">" + a[i].text + "</option>";
							return t += "</select></div>"
						},
						s.create_textLong = function (e) {
							return "<div>" + e.title + '</div><div class="formRowFields"><div class="gray_bevel for_text_input fullwidth"><input type="text" name="' + e.name + '" id="' + e.name + '" value="' + e.value + '"></div></div>'
						},
						s([{
									group: v("set.global"),
									rows: [{
											type: "select",
											title: v("set.lang"),
											name: "globalLang",
											options: [{
													text: "English",
													value: "en"
												}, {
													text: "Русский",
													value: "ru"
												}, {
													text: "简体中文",
													value: "zh-cn"
												}, {
													text: "日本語",
													value: "jp"
												}
											]
										}, {
											type: "checkbox",
											title: v("set.FixNavbar"),
											name: "globalFixNavbar"
										}, {
											type: "checkbox",
											title: v("set.hideAccName"),
											name: "globalHideAccName"
										}, {
											type: "checkbox",
											title: v("set.hideBalance"),
											name: "globalHideWalletBalance"
										}, {
											type: "checkbox",
											title: v("set.linkfilter"),
											name: "globalDisableLinkFilted"
										}
									]
								}, {
									group: v("set.store"),
									rows: [{
											type: "checkbox",
											title: v("set.showCCBtn"),
											name: "storeShowCCbtn"
										}, {
											type: "textLong",
											title: v("set.CCList"),
											name: "storeCCList"
										}, {
											type: "checkbox",
											title: v("set.showCartBtn"),
											name: "storeShowCartBtn"
										}, {
											type: "checkbox",
											title: v("set.cartAjax"),
											name: "storeCartAjax"
										}, {
											type: "checkbox",
											title: v("set.showSubid"),
											name: "storeShowSubid"
										}, {
											type: "checkbox",
											title: v("set.showBtnGetPrices"),
											name: "storeShowBtnGetPrices"
										}
									]
								}, {
									group: v("set.market"),
									rows: [{
											type: "checkbox",
											title: v("set.marketMainPageFuncs"),
											name: "marketMainPageFuncs"
										}
									]
								}
							]),
						r("#swt_btnDef").click(function () {
							_.reset(),
							_.save(),
							_.storage.gm ? f.location.reload() : f.location.href = "https://store.steampowered.com/about/#swt-settings-del"
						}),
						r("form#editForm").submit(function (e) {
							var t,
							a,
							i;
							for (t = 0; t < s.fields.length; t++)
								a = s.fields[t], i = r("#" + a), _.cur[a] = "checkbox" == i.prop("type") ? i.prop("checked") : i.val();
							_.save(),
							e.preventDefault(),
							_.storage.gm ? f.location.reload() : f.location.href = "https://store.steampowered.com/about/#swt-settings-save=" + encodeURIComponent(JSON.stringify(_.cur))
						})
					}
				}, {
					match: [i + "about/#swt-settings.*"],
					run: function () {
						var e = f.location.hash;
						if (e && "swt-settings-" == e.substr(1, 13))
							if ("save" == e.substr(14, 4)) {
								var t = e.substr(19);
								t = decodeURIComponent(t),
								_.storage.set(t)
							} else
								"del" == e.substr(14, 3) && _.storage.del();
						f.location.href = "https://steamcommunity.com/groups/SteamClientBeta#swt-settings"
					}
				}, {
					match: [n + "linkfilter.*"],
					run: function () {
						_.cur.globalDisableLinkFilted && (f.location = f.$J("#proceedButton").attr("href"))
					}
				}
			], r = document.URL, s = 0; s < o.length; s++)for (var c = 0; c < o[s].match.length; c++) {
			if (new RegExp("^" + o[s].match[c] + "$", "i").test(r)) {
				o[s].run();
				break
			}
		}
}
();
