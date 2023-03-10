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
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 12,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: zymne
  },
  {
    id: 13,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 14,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: jakovychi
  },
  {
    id: 15,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: hubyn
  },
  {
    id: 16,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 17,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 18,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: totchyn
  },
  {
    id: 19,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 20,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: buzhanka
  },
  {
    id: 21,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: dihtiv
  },
  {
    id: 22,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: hreniv
  },
  {
    id: 23,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 24,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: buzkovychi
  },
  {
    id: 25,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 26,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: dorogtnychi
  },
  {
    id: 27,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 28,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 29,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: marcovuchi
  },
  {
    id: 30,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 31,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 32,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 33,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 34,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
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
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 37,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 38,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 39,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: drevyni
  },
  {
    id: 40,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 41,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
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
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 44,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 45,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: umanci
  },
  {
    id: 46,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 47,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 48,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 49,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: kolpyutiv
  },
  {
    id: 50,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 51,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: pidberezza
  },
  {
    id: 52,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: pechychvosty
  },
  {
    id: 53,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 54,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: rycovychi
  },
  {
    id: 55,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: trybki
  },
  {
    id: 56,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: samovola
  },
  {
    id: 57,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 58,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: movnyki
  },
  {
    id: 59,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 60,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: merva
  },
  {
    id: 61,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 62,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 63,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 64,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 65,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
  {
    id: 66,  
    name: '',
    transcription: <p>{''}</p>, 
    note: <p>{''}</p>, 
    plus: <p>{''}</p>,
    audio: ''
  },
]