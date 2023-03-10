import {zora, susval, svichev, zubylne, ludyn, izov, hotaciv, vochatun, zymne, jakovychi,
  hubyn, totchyn, buzhanka, dihtiv, hreniv, buzkovychi, dorogtnychi, marcovuchi,
  drevyni, umanci, kolpyutiv, pidberezza, pechychvosty, rycovychi, trybki, samovola,
  movnyki, merva} from './audio'


export const villages = [
  {
    id: 1,  
    name: '1.	Зоря Володимирського району Волинської області',
    transcription: <p>{'['}<b>{'це́рква'}</b>{'в͜  нас ду́же хоро́ша]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: zora
  },
  {
    id: 2,  
    name: '2.	Сусваль Володимирського району Волинської області',
    transcription: <p>{'[каза́ли'}<b>{'чар´ін'}</b>{'ʽчеріньʼ / на͜ '}<b>{'чар´е́н´і'}</b>{' п’ікли́е тоĭ хл´іб]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: susval
  },
  {
    id: 3,  
    name: '3.	Свійчев Володимирського району Волинської області',
    transcription: <p>{'[а з͜ '}<b>{'та́йі'}</b> {' / збʼіж:а]'}</p>, 
    note: <p>{'Також зафіксовано в говірці:'}<i>{' з͜  та́йі  /  та́йа < з те́ї < з то́ї.'}</i></p>, 
    plus: <p>{''}</p>,
    audio: svichev
  },
  {
    id: 4,  
    name: '4.	Ворончин Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід в словах:'}<i>{' ва́прик, ца́брик, ба́ригом, ба́ригом аж до͜  Ба́рис´ка, до͜  ца́ркви'}</i>{' (див. с. 87–88).'}</p>,
    audio: ''
  },
  {
    id: 5,  
    name: '5.	Береськ Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у ненаголошеній позиції в слові:'} <i>{' пшани́чнис´ко'}</i>{' (див. с. 87).'}</p>,
    audio: ''
  },
  {
    id: 6,  
    name: '6.	Зубильне Луцького району Волинської області',
    transcription: <p><b>{'[це́рква]'}</b></p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: zubylne
  },
  {
    id: 7,  
    name: '7.	Лудин Володимирського району Волинської області',
    transcription: <p>{'[коли́ в͜ '}<b>{'ца́ркві'}</b> {' шчо?]'}</p>, 
    note: <p>{'Також зафіксовано в говірці:'} <i>{' змарз, вмар, за͜  ма́на / за͜  ма́не / ду͜  мина́ / в͜  ма́не, ра́шта ʽрештаʼ, мала́н´кʼі, нама́ле, ша, вжа, в͜  ца́рквʼі, свʼача́ну ʽсвяченуʼ, в͜  дан´, в:а́чура ʽввечеріʼ, Хут´ача́вʼі, на͜ пита́л´н´і, сила́д´ /  сила́дц´і ʽоселедецьʼ, риба́рц´а / риба́рц´уў, та́рли, рида́н´ко, па́рц´у, жива́ ʽживеʼ, вака́ц´ійа ʽакаціяʼ, са́рпом, с´іва́н´ка, на͜  за́мл´у, гупа́н´кʼі, ду͜  са́бе, паса́ш, ду͜  на́йі, ду͜  ма́йі, в͜  та́бе /  тиба́.'}</i></p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: за͜  ма́на, рад´і́ска.'}</p>,
    audio: ludyn
  },
  {
    id: 8,  
    name: '8.	Ізов Володимирського району Волинської області',
    transcription: <p>{'[а боршч ту'}<b>{' вжа'}</b>{' за-за туĭ͜  во]'}</p>, 
    note: <p>{'Також зафіксовано в говірці:'}<i>{' ша, за͜  ма́йі па́мйат´і, в͜  ма́не, жма́н՛ку, тра́ба.'}</i></p>, 
    plus: <p>{''}</p>,
    audio: izov
  },
  {
    id: 9,  
    name: '9.	Хотячів Володимирського району Волинської області',
    transcription: <p><b>{'[ца́рква]'}</b></p>, 
    note: <p>{'* респондентка, слово '}<b>{'[ца́рква]'}</b>{'вимовила, щоб пояснити, що так говорили раніше в селі.'}</p>, 
    plus: <p>{'Пор. у праці праці А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.):'}<i>{'ба́риг, гуруба́ц´, па́риц´, па́рстин´, па́рси, ва́рхн´а, ва́прик, гува́чка, швац´, крава́ц´, жива́мо, пу́с´л´а ма́не, ма́нше, вма́рла, з͜  ма́дом, та́рлиц´а, вирита́но, же́то руста́, цвʼіта́, стап, пруĭда́, гуда́жа, да́с´іт´, йак вʼіда́ц´а ту ĭ пʼі́вʼін´ ниса́ц´а, на́ц´кʼі, куна́вʼі, в͜  са́бе, на͜  за́мл´у, гра́бʼіном, бра́шут, ча́риз͜  гра́бл´у, стула́ц´, шча, нас ча́твʼіро, ча́лад´, вжа (див. с. 83).'}</i></p>,
    audio: hotaciv
  },
  {
    id: 10,  
    name: '10.	Вощатин Володимирського району Волинської області',
    transcription: <p><b>{'[журава́л´]'}</b></p>, 
    note: <p>{'Також зафіксовано в говірці:'}<i>{' ша, вжа, ĭдам, хришча́ниĭ, вма́рла, з͜  сва́ї < з све́ї < з сво́єї, ман´е́ткʼі ʽманаткиʼ, з͜  Васила́м, ду͜  на́йі, ва́л´она, мала́н´ку, гра́бʼін´, спр´ада́, бʼіра́ш, да͜  в͜  ко́го, ца́рква, стула́ц´, журава́л´, тра ʽтребаʼ, та́йу /  ду͜  та́йі < те́ю < то́ю, Та́кл´а, ĭдаш,  ду͜  та́бе / напро́т´і та́бе, та́рли, са́рпом, па́ру дан´, зиĭда́, ва́чʼір, всла́пла < всле́пла, ржа ʽіржеʼ, свʼача́не, клада́ / пуклада́, мина́, зила́ни, пола́жали ʽполежалиʼ, та́мр´ава.'}</i></p>, 
    plus: <p>{'Пор. у ненаголошеній позиції:'}<i>{' пшани́ц´у / пшане́ц´і, варата́но.'}</i></p>,
    audio: vochatun
  },
  {
    id: 11,  
    name: '11.	 Суходоли Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості»  (1956 р.), фіксуємо перехід у слові '} <i>{'гова́чка'}</i> {' (див. с. 86).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 12,  
    name: '12.	Зимне Володимирського району Волинської області',
    transcription: <p>{'[тут була́ '}<b>{'це́рква]'}</b></p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: zymne
  },
  {
    id: 13,  
    name: '13.	Хобултова Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.), фіксуємо перехід у словах: '}<i>{'ру́ба́л´, гороба́ц´, напа́рсток, чʼіпа́ц´, па́рс´і ʽперсаʼ, бе́дло рева́, журава́л´, гува́с, гува́чка, ма́чʼік ʽмечикʼ, ма́ло ма́ду, та́рниц´а / та́рлиц´а, ста́шка, вʼіт͜  та́йі хвала́ни, та́мно, та́с´ц´ ĭда́, йіда́н, земни́ĭ дан´, да́риво, овʼіда́рок, на́ц´кʼі, жнац´, куна́м ʽконемʼ, з͜  на́йу, про́т´іў са́бе, са́рцем, за́мл´у тра́ба убрубл´а́ти, за́рно, ца́брик, ча́раз гра́бл´у, ожера́д, бра́шут, бира́зовиĭ, учира́т, гора́л, тра́т´іĭ, стула́ц´, мала́н´ка, ча́л´ід´, з͜  душча́м, хришча́ниĭ, диша́виĭ, лига́н´кʼі '}</i>{'(див. с.83).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: ча́раз '}<i>{'гра́бл´у '}</i> {'(див. с.83).'}</p>,
    audio: ''
  },
  {
    id: 14,  
    name: '14.	Яковичі Володимирського району Волинської області',
    transcription: <p>{'[бе́ригом / бе́ригом // '}<b>{'ста́шкойу/ ста́шкойу '}</b>{'// ду͜  '}<b>{'бара́зовиц´кʼі '}</b>{'це́ркви]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{'* респондентка (Томчук Ольга Митрофанівна, 1939 р.н)  нечітко вимовляє [а] відповідно до *е > [е], але зауважує, що батьки вимовляли саме так.'}</p>,
    audio: jakovychi
  },
  {
    id: 15,  
    name: '15. Губин Володимирського району Волинської області',
    transcription: <p>{'[це́рква / '}<b>{'це́рква '}</b>{'/ йде́м ду͜ '}<b>{'ца́ркв’і]'}</b></p>, 
    note: <p>{'* у мові респондентки (Андріюк Антоніна Іванівна, 1940 р.н.) відсутня зміна, окрім зафіксованих двох словоформ. Пор. у ненаголошеній позиції: '}<i>{'пшане́ц´і.'}</i></p>, 
    plus: <p>{'Пор. у праці А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.), явище зафіксовано в словах: '}<i>{'руба́л´, ва́рхн´а, нима́тена ха́та, ста́бла, та́сц´, вда́жа, ца́брик, гра́чка, ча́лусти, ча́р´ін´ '}</i>{'(див. с. 83).'}</p>,
    audio: hubyn
  },
  {
    id: 16,  
    name: '16. Війниця Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці Г. Шила «Південно-західні говори УРСР на північ від Дністра» (1957 р.), фіксуємо перехід у словах: '}<i>{'вдува́ц´, гува́чка, гуруба́ц´, в͜  два́рах, жма́н´а, зва́ц´е, три ĭма́н´:і, смарт´, типа́р´ішн´і, уба́римок, хриба́т, хл´іба́ц´, читва́р, чима́рка, куна́ві, мулуда́н´кʼі, свʼіда́рок, ду͜  са́бе, ста́шка, са́стр´іў, та́рлиц´а, та́ст´, та́шча, та́шут´, та́рт´і, тупа́н´кʼі, лига́н´кʼі, тиха́н´кʼі, мина́ ʽменеʼ, паса́, привʼіза́, рива́ '}</i>{'(див. с. 44–45). '}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 17,  
    name: '17. Холопичі Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'В. Покальчук у розвідці «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.). зауважив, що зміна характерна для говірки с. Холопичі, але нечастотна (див. с. 86).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 18,  
    name: '18. Торчин Луцького району Волинської області',
    transcription: <p>{'[це́рква]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: totchyn
  },
  {
    id: 19,  
    name: '19. Млинище Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.), фіксуємо перехід у словах: '}<i>{'ба́рист, руба́л´, шчирба́ц´, тиба́, прибире́ пан то буда́ пудуба́н´, гупа́н´ке, чипа́ц´, гува́чка, хл´іва́ц´, чварт´, ва́прик, швац´, сва́кур, так крава́ц´ кра́йе йак мата́р´ійі стайе́, смарт´, нима́т´іна ха́та, тас´ц´, та́шча, вʼін вида́, нигда́, на͜  да́ривʼі, да то́нко там рва́ца, дошч іда́, вуда́жа, куна́вʼі, вʼін паса́, ниса́, бʼіда́ бʼіду́ пʼірибу́де йідна́ мина́ да́с´іт´ бу́де, гра́чниско, чира́шн´а, мукра́ц´, дала́ко, гула́н´, вжа́ниса, вжа, пʼіруге́ пʼіча́, вуда́ тича́ '}</i>{'(див. с. 83).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 20,  
    name: '20. Бужанка Володимирського району Волинської області',
    transcription: <p>{'[так / про́сто / кули́с´ гувури́ли '}<b>{'це́рква '}</b>{'//  мо́же воно́ так пра́вил´но]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: buzhanka
  },
  {
    id: 21,  
    name: '21. Дігтів Володимирського району Волинської області',
    transcription: <p>{'[в нас коли́с´ ту худи́ли з '}<b>{'пруца́с´ійейу '}</b>{'пу͜  пул´е́х / крупи́ли]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: dihtiv
  },
  {
    id: 22,  
    name: '22. Хренів Володимирського району Волинської області',
    transcription: <p><b>{'[це́рква]'}</b></p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: hreniv
  },
  {
    id: 23,  
    name: '23. Бубнів Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.), фіксуємо перехід у словах: '}<i>{'типа́р, журава́л´, в͜  два́рах, ма́ло ма́ду, та́рниц´а, та́йі но́чʼі, йіда́н дан´, да́вʼіт´, з͜  на́йу, жнац´ жна´, поба́чив мина́, куна́м, са́струв ʽсестерʼ, паса́ гу́с´і, са́рцем, вʼіза́ ʽвезеʼ, тра́ба, вчира́ту ʽочеретуʼ, зила́ниĭ, стула́ц´, з͜  душча́м, ча́л´ад´ '}</i>{'(див. с.83). Пор. ще в праці Г. Шила «Південно-західні говори УРСР на північ від Дністра» (1957 р.): '}<i>{'бира́за, бра́шут, вара́шка, вʼітра́ц´, вучира́т ʽочеретʼ, гра́бʼін´, гра́чка, гура́л, гура́нда ʽорендаʼ, ба́риг, ва́дра, ва́прик, ва́чур, йачма́н´у, кунупа́л´, купа́ц´, мад, ма́лник, ма́чʼік, напа́ўно, па́рстин´, пирива́сла, р´іва́ц´, сва́йу, сма́ркло, вирита́но, вса́н´кʼіĭ, вуза́н´куйу, ду͜  та́бе, та́рин, уда́жа, удза́мок, мижа́йу, наша́лникʼі, пича́р´іў, хришча́ниĭ, ча́л´ад´, ча́пл´аіц´а, гат ʽгетьʼ, штаха́т´і ʽштахетиʼ, гура́ ʽореʼ, да ʽдеʼ, жна, іда́, клада́ '}</i>{'(див. с. 44–45).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'вали́ку, пшани́ц´а '}</i>{'(див. с. 44).'}</p>,
    audio: ''
  },
  {
    id: 24,  
    name: '24. Бужковичі Володимирського району Волинської області',
    transcription: <p>{'[с´і́йали / али '}<b>{'ма́нше]'}</b></p>, 
    note: <p>{'Також зафіксовано в говірці: '}<i>{'ма́нше /  мала́н´ка / мала́н´кʼі, ĭда, з͜  та́йі < з те́ї < з то́ї, тра́ба, з͜  да́рива, сва́клойу, ша, в͜  ма́на,  вмар, мад, бера́, пуд͜  да́риво, гопа́н´кʼі.'}</i></p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'пшане́ц´і, карас´і́н.'}</i></p>,
    audio: buzkovychi
  },
  {
    id: 25,  
    name: '25. Луковичі Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 26,  
    name: '26. Дорогиничі Володимирського району Волинської області',
    transcription: <p><b>{'[ца́рква]'}</b></p>, 
    note: <p>{'* у мовленні респондентки (Гасінська Наталія Василівна, 1940 р. н.) зміна вже відсутня, але вона пам’ятає, що раніше в говірці говорили саме так.'}<br />{'Пор. у статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), явище зафіксовано в словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: dorogtnychi
  },
  {
    id: 27,  
    name: '27. Крухиничі Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у словах:  '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86). Пор. ще в праці А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.): '}<i>{'гува́чки ба́кайут, ўдува́ц´, гува́с, упа́н´ки, та́мрава, да́с´іт´, куна́м, жнац´, бра́шут, ма́ло учира́ту, дала́ко, з͜  душча́м '}</i>{'(див. с. 83). Пор. ще в праці Г. Шила Південно-західні говори УРСР на північ від Дністра» (1957 р.): '}<i>{'мрац´, пупира́чка, з͜  ра́ман´у, стула́ц´, тра́ба, тра́т´іĭ, Сима́н, з͜  кушча́м, киша́н´у '}</i>{'(див. с. 44–45).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції:  '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86), '}<i>{'з͜  ра́ман´у '}</i>{'(див. с. 44).'}</p>,
    audio: ''
  },
  {
    id: 28,  
    name: '28. Козлів Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 29,  
    name: '29. Марковичі Володимирського району Волинської області',
    transcription: <p>{'[о / вз´ала́ '}<i>{'па́нзл´а]'}</i></p>, 
    note: <p>{'Пор. ще в говірці (джерело – «Фонокарта західнополіського говору та суміжжя»): '}<i>{'вжа, пожина́ш ʽпоженешʼ, принеса́ ʽпринесеʼ, па́нзл́а / па́нзил́, в͜  та́ртку / зата́рла, та́йі, за́мл́у, тра́ба.'}</i></p>, 
    plus: <p>{''}</p>,
    audio: marcovuchi
  },
  {
    id: 30,  
    name: '30. Твориничі Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.),  фіксуємо перехід у словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 31,  
    name: 'району ',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.),  фіксуємо перехід у словах:  '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 32,  
    name: '32. Шельвів Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.),  фіксуємо перехід у словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 33,  
    name: '33. Войнин Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.),  фіксуємо перехід у словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 34,  
    name: '34. Великий Окорськ Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі тексту, уміщеного в збірнику Г.Аркушина «Голоси з Волинського Полісся».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 35,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 36,  
    name: '36. Морозовичі Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 37,  
    name: '37. Стара Лішня Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{' У мовленні сучасних мешканців села досліджувана зміна відсутня, проте люди згадують, що раніше в селі казали ца́рква, па́рвиĭ, ва́прик.'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 38,  
    name: '38. Грибовиця Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі тексту, уміщеного в збірнику «Скарби українських говорів: тексти про борщ».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 39,  
    name: '39. Древині Володимирського району Волинської області',
    transcription: <p>{'[тре́ба в͜  '}<b>{'це́ркву '}</b>{'ĭте]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: drevyni
  },
  {
    id: 40,  
    name: '40. Жашковичі Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в збірнику «Скарби українських говорів: тексти про борщ», перехід зафіксовано у формах: '}<i>{'пита́л́н́у / пита́л́н́і ʽпательняʼ '}</i>{'(див. с. 152).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 41,  
    name: '41. Старий Загорів Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці  А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.), фіксуємо перехід у словах: '}<i>{'ба́р´іг, па́рстин´, ко́ло па́чʼі, опа́н´кʼі, копа́ц´, зва́ца, хл´іва́ц´, ва́прик, ова́кур, ва́л´ми, та́рен ʽтеренʼ, ста́л´мах, йак вида́ц´а, то ĭ пʼі́вен´ ниса́ц´а, свʼіда́рок, в͜  на́ц´ках, клина́ц´, чира́шн´а, вара́никʼі, гла́чик, жа́рд´а, вжа '}</i>{'(див. с. 83).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 42,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 43,  
    name: '43. Кремеш Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 44,  
    name: '44. Ватин Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у словах: '}<i>{'ужа́ ува́чка ба́кайе, ол´іва́ц´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 45,  
    name: '45. Уманці Луцького району  Волинської області',
    transcription: <p><b>{'[це́рква]'}</b></p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: umanci
  },
  {
    id: 46,  
    name: '46. Бережанка Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'В. Покальчук зафіксував, що жителі сусідніх сіл, характеризуючи мовлення мешканців с. Бережанка, склали приказку '}<i>{'«Ба́ригом, ба́ригом і заĭшо́ў до Ба́скупич»; '}</i>{'хоча, зауважує дослідник, зміна [е] > [а] у цій говірці поширена менше (див. с. 86).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 47,  
    name: '47. Линів Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у словах: '}<i>{'гова́чка / гова́чник, ца́брик, ва́прик пра два́ри, тра́ба, дан´, крава́ц´, та́рниц´а, руба́л´, ста́жка, кола́са, кра́пко розу́мниĭ, па́рстин´, без͜  гра́бл´у ʽчерез греблюʼ, до͜  Шал´о́ва дала́ко, ба́риг / ба́раг, Фа́дур йда ба́ригом, да́с´ет´ '}</i>{'(див. с. 86).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'сти́рта пшани́ц´і '}</i>{'(див. с. 86).'}</p>,
    audio: ''
  },
  {
    id: 48,  
    name: '48. Скобелка Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 49,  
    name: '49. Колпитів Володимирського району Волинської області',
    transcription: <p><i>{'[Йухра́м '}</i>{'ʽЄфремʼ]'}</p>,  
    note: <p>{'Пор. ще у говірці в ненаголошеній позиції (джерело – «Фонокарта західнополіського говору та суміжжя»):  '}<i>{'пшане́ц´і.'}</i></p>, 
    plus: <p>{''}</p>,
    audio: kolpyutiv
  },
  {
    id: 50,  
    name: '50. Лемешів Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 51,  
    name: ' 51. Підбереззя Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці Г. Шила «Південно-західні говори УРСР на північ від Дністра» (1957 р.), фіксуємо перехід у словах: '}<i>{'з͜  на́йу, на́ц´ки, пита́л´ка, пʼітста́л´уйе, вча́ра, з͜  душча́м, руста́ '}</i>{'(див. с. 44–45).'}</p>, 
    plus: <p>{''}</p>,
    audio: pidberezza
  },
  {
    id: 52,  
    name: '52. Печихвости Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>, 
    plus: <p>{''}</p>,
    audio: pechychvosty
  },
  {
    id: 53,  
    name: '53. Павлівка Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 54,  
    name: '54. Риковичі Володимирського району Волинської області',
    transcription: <p>{'[ста́вл´айут по͜  '}<i>{'сера́дин´і '}</i>{'стил´ц´е́]'}</p>, 
    note: <p>{'Пор. ще в говірці (джерело – «Фонокарта західнополіського говору та суміжжя»): '}<i>{'по͜  сара́дин´і, ниса́, вжа, до͜  на́йі, дан´ /  трутода́н´, ша, вал´а́на ʽвельонаʼ, привеза́ ʽпривезеʼ, бера́, ниса́, на͜  пла́чах, ĭда,  ма́нше.'}</i><br />{'Пор. у ненаголошеній позиції: '}<i>{'вʼін наса́, бара́ска '}</i>{'(див. с. 84).'}</p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'вʼін наса́, бара́ска '}</i>{'(див. с. 84).'}</p>,
    audio: rycovychi
  },
  {
    id: 55,  
    name: '55. Трубки Володимирського району Волинської області',
    transcription: <p>{'[а ше тоĭ капʼіл´у́ш впав на͜ '}<i>{'за́мл´у]'}</i></p>, 
    note: <p>{'Пор. ще у говірці (джерело – «Фонокарта західнополіського говору та суміжжя»): '}<i>{'да ʽдеʼ, бира́ ʽбереʼ, ша, на͜  за́мл´у, чуўпа́ ʽчовпеʼ, мина́ ʽменеʼ, вжа.'}</i></p>, 
    plus: <p>{'Пор. у ненаголошеній позиції: '}<i>{'го́нда ʽондеʼ.'}</i></p>,
    audio: trybki
  },
  {
    id: 56,  
    name: '56. Самоволя Володимирського району Волинської області',
    transcription: <p><i>{'[зма́л´ут´ '}</i>{'мен´і́]'}</p>, 
    note: <p>{'Пор. ще у говірці (джерело – «Фонокарта західнополіського говору та суміжжя»): '}<i>{'мина́, зма́л´ут´, зила́ни ʽзеленийʼ, типа́р, ду͜  ма́йі, ду͜  ма́не.'}</i></p>, 
    plus: <p>{''}</p>,
    audio: samovola
  },
  {
    id: 57,  
    name: '57. Грушів Володимирського району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці А. Залеського «Вокалізм південно-західних говорів української мови» (1973 р.), фіксуємо перехід у словах: '}<i>{'Па́т´а ʽПетяʼ, па́ршʼі, типа́рка, ма́лник, ста́р´ін´, д´іта́ĭ, на вс´у ста́жу, ду͜  та́би, дас´ йе, прупаде́ ʽпропадеʼ, туна́н´ка, шина́л´і, пʼіса́н´, напро́т´іў са́би, кула́са, мала́н´кʼі, б´іла́н´кʼі, пла́чʼі, кра́пкʼі, гура́л, вча́пʼіц´:а, пʼіча́ '}</i>{'(див. с. 83–84). '}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 58,  
    name: '58. Мовники Володимирського району Волинської області ',
    transcription: <p>{'[н´е /  '}<b>{'це́рква]'}</b></p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: movnyki
  },
  {
    id: 59,  
    name: ' 59. Колодеже Луцького району Волинської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в статті В. Покальчука «Надсарнський говір на Волині та його фонетичні особливості» (1956 р.), фіксуємо перехід у ненаголошеній позиції слова  '}<i>{'сочави́ц´а '}</i>{'(див. с. 88).'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 60,  
    name: '60. Брани Луцького району Волинської області ',
    transcription: <p>{'[на́ша '}<b>{'це́рква '}</b>{'с͜  ти́с´ачу с´імсо́т дваĭц´а́того ро́ку]'}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 61,  
    name: '61. Мерва Луцького району Волинської області ',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: merva
  },
  {
    id: 62,  
    name: '62. Залижня Червоноградського району Львівської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці Г. Шила «Південно-західні говори УРСР на північ від Дністра» (1957 р.), фіксуємо перехід у слові '}<i>{'вида́л´ц´а '}</i>{'(див. с. 45). '}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 63,  
    name: '63. Скоморохи Червоноградського району Львівської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці Г. Шила «Південно-західні говори УРСР на північ від Дністра» (1957 р.), фіксуємо перехід в словах: '}<i>{'бʼіра́, вжа, втича́, вʼіз´ма́, гала́ ʽалеʼ '}</i>{'(див. с. 44–45). '}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 64,  
    name: '64. Лучиці Червоноградського району Львівської області',
    transcription: <p>{''}</p>, 
    note: <p>{'На основі матеріалу, уміщеного в праці Г. Шила «Південно-західні говори УРСР на північ від Дністра» (1957 р.), фіксуємо перехід у словах:  '}<i>{'да́вʼіт´, дан´, да́риво, да́с´іт´, дас´, ждам, жнац´, за́рно, йа́ĭца, плета́ц´а, пʼіса́н´, по͜  са́лах, са́рци ʽсерцеʼ '}</i>{'(див. с. 44–45). '}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 65,  
    name: '65. Боб’ятин Червоноградського району Львівської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 66,  
    name: ' 66.  Опільсько Червоноградського району Львівської області',
    transcription: <p>{''}</p>, 
    note: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 67,  
    name: '67. Фусів Червоноградського району Львівської області',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{'Зміни [е] > [а] не зафіксовано на матеріалі запису, розміщеного на «Фонокарті західнополіського говору та суміжжя».'}</p>,
    audio: ''
  }
]