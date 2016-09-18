'use strict';

/**
 * @ngdoc overview
 * @name wifindBarApp
 * @description
 * # wifindBarApp
 *
 * Main module of the application.
 */
angular
  .module('wifindBarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'uiGmapgoogle-maps',
    'ngMaterial',
    'ui.multiselect'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCoZvFDIO3KozVbIHKD-sXZL6LMoCGRQ3w',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    })
  })
  .value('GuiaDeBaresDeBuenosAires', {
      listaDeBares: [{ubicacion: {latitud: -34.56481344937538, longitud: -58.430141973041856}}, {
        ubicacion: {
          latitud: -34.57099424227723,
          longitud: -58.43275279216641
        }
      }, {ubicacion: {latitud: -34.64576107045808, longitud: -58.51532315538899}}, {
        ubicacion: {
          latitud: -34.62950107538147,
          longitud: -58.41023586571338
        }
      }, {ubicacion: {latitud: -34.57185393829885, longitud: -58.48592250428624}}, {
        ubicacion: {
          latitud: -34.62434962322117,
          longitud: -58.50721315744832
        }
      }, {ubicacion: {latitud: -34.63437874709919, longitud: -58.38690772702371}}, {
        ubicacion: {
          latitud: -34.563366007951736,
          longitud: -58.41931599293838
        }
      }, {ubicacion: {latitud: -34.62488429578161, longitud: -58.39944193031851}}, {
        ubicacion: {
          latitud: -34.55644706126633,
          longitud: -58.536077481561286
        }
      }, {ubicacion: {latitud: -34.580419845895214, longitud: -58.463621658868036}}, {
        ubicacion: {
          latitud: -34.54797609684734,
          longitud: -58.501038492082856
        }
      }, {ubicacion: {latitud: -34.59443193835336, longitud: -58.447935849232664}}, {
        ubicacion: {
          latitud: -34.64645054683352,
          longitud: -58.46227568211099
        }
      }, {ubicacion: {latitud: -34.627879518342915, longitud: -58.40806767117914}}, {
        ubicacion: {
          latitud: -34.613183505267955,
          longitud: -58.53100757915246
        }
      }, {ubicacion: {latitud: -34.619506538205236, longitud: -58.53440331386791}}, {
        ubicacion: {
          latitud: -34.57690580113014,
          longitud: -58.44064789735597
        }
      }, {ubicacion: {latitud: -34.548761244955294, longitud: -58.44635942086613}}, {
        ubicacion: {
          latitud: -34.63701107077641,
          longitud: -58.47700994886732
        }
      }, {ubicacion: {latitud: -34.602339704230346, longitud: -58.454432570873486}}, {
        ubicacion: {
          latitud: -34.61150521502218,
          longitud: -58.48797126117584
        }
      }, {ubicacion: {latitud: -34.568496815305, longitud: -58.517393327462635}}, {
        ubicacion: {
          latitud: -34.603624437162736,
          longitud: -58.444844954554576
        }
      }, {ubicacion: {latitud: -34.63723706499755, longitud: -58.50811196112028}}, {
        ubicacion: {
          latitud: -34.554235286898574,
          longitud: -58.474473817645865
        }
      }, {ubicacion: {latitud: -34.53850591610017, longitud: -58.46372662705759}}, {
        ubicacion: {
          latitud: -34.60091016812063,
          longitud: -58.39071174759868
        }
      }, {ubicacion: {latitud: -34.62805655863571, longitud: -58.40722767614052}}, {
        ubicacion: {
          latitud: -34.59199812654319,
          longitud: -58.5246519242917
        }
      }, {ubicacion: {latitud: -34.552007660183406, longitud: -58.49978943977217}}, {
        ubicacion: {
          latitud: -34.561297054837546,
          longitud: -58.504831164783496
        }
      }, {ubicacion: {latitud: -34.58891539712945, longitud: -58.49401716387693}}, {
        ubicacion: {
          latitud: -34.651227572326675,
          longitud: -58.49901844190587
        }
      }, {ubicacion: {latitud: -34.563210851082, longitud: -58.505723528781076}}, {
        ubicacion: {
          latitud: -34.54127159663218,
          longitud: -58.479688707213825
        }
      }, {ubicacion: {latitud: -34.549589076932484, longitud: -58.512263421471715}}, {
        ubicacion: {
          latitud: -34.650572530722144,
          longitud: -58.5235536297024
        }
      }, {ubicacion: {latitud: -34.581946902008646, longitud: -58.41580119738483}}, {
        ubicacion: {
          latitud: -34.63629155147712,
          longitud: -58.45135692620443
        }
      }, {ubicacion: {latitud: -34.55412303916378, longitud: -58.39394066998262}}, {
        ubicacion: {
          latitud: -34.57033846912118,
          longitud: -58.4616810837206
        }
      }, {ubicacion: {latitud: -34.61833486359258, longitud: -58.38321332609453}}, {
        ubicacion: {
          latitud: -34.63967723936709,
          longitud: -58.51757055227449
        }
      }, {ubicacion: {latitud: -34.648215078523535, longitud: -58.41249055487838}}, {
        ubicacion: {
          latitud: -34.55864527601948,
          longitud: -58.38562250187028
        }
      }, {ubicacion: {latitud: -34.60056552290628, longitud: -58.45857831085109}}, {
        ubicacion: {
          latitud: -34.64500977884727,
          longitud: -58.51212021076393
        }
      }, {ubicacion: {latitud: -34.63158640875948, longitud: -58.5000335209418}}, {
        ubicacion: {
          latitud: -34.59245684227391,
          longitud: -58.365584363951264
        }
      }, {ubicacion: {latitud: -34.595647465863216, longitud: -58.40491070086054}}, {
        ubicacion: {
          latitud: -34.636585114352854,
          longitud: -58.43501680633562
        }
      }, {ubicacion: {latitud: -34.547022695333, longitud: -58.523698523919144}}, {
        ubicacion: {
          latitud: -34.64992405769087,
          longitud: -58.471736298978705
        }
      }, {ubicacion: {latitud: -34.5542485952583, longitud: -58.53197394642159}}, {
        ubicacion: {
          latitud: -34.6014922617582,
          longitud: -58.40471915191627
        }
      }, {ubicacion: {latitud: -34.53808309567708, longitud: -58.475729906069546}}, {
        ubicacion: {
          latitud: -34.54157566257019,
          longitud: -58.45857760263121
        }
      }, {ubicacion: {latitud: -34.547274752264194, longitud: -58.45908331975721}}, {
        ubicacion: {
          latitud: -34.59531679695159,
          longitud: -58.52153224937949
        }
      }, {ubicacion: {latitud: -34.64039747134152, longitud: -58.42995513779445}}, {
        ubicacion: {
          latitud: -34.63426550178766,
          longitud: -58.44288052475235
        }
      }, {ubicacion: {latitud: -34.55595669711209, longitud: -58.42853385047663}}, {
        ubicacion: {
          latitud: -34.60843097444823,
          longitud: -58.49744658010146
        }
      }, {ubicacion: {latitud: -34.544994517199996, longitud: -58.535304473149566}}, {
        ubicacion: {
          latitud: -34.56562395367761,
          longitud: -58.39871500379692
        }
      }, {ubicacion: {latitud: -34.65690414435325, longitud: -58.463199571421654}}, {
        ubicacion: {
          latitud: -34.656436022341,
          longitud: -58.52991326038202
        }
      }, {ubicacion: {latitud: -34.586727884482656, longitud: -58.523742459490855}}, {
        ubicacion: {
          latitud: -34.56140879219451,
          longitud: -58.39569056198394
        }
      }, {ubicacion: {latitud: -34.598340705923626, longitud: -58.5262744235788}}, {
        ubicacion: {
          latitud: -34.653796199295655,
          longitud: -58.38587344498113
        }
      }, {ubicacion: {latitud: -34.56658238486818, longitud: -58.50241635643695}}, {
        ubicacion: {
          latitud: -34.63822571530534,
          longitud: -58.44026015336907
        }
      }, {ubicacion: {latitud: -34.62730351940524, longitud: -58.440341317945816}}, {
        ubicacion: {
          latitud: -34.65177407619699,
          longitud: -58.44179495829224
        }
      }, {ubicacion: {latitud: -34.60029273220873, longitud: -58.42650262794742}}, {
        ubicacion: {
          latitud: -34.54898480968897,
          longitud: -58.51361861750604
        }
      }, {ubicacion: {latitud: -34.55282366050528, longitud: -58.51732928440138}}, {
        ubicacion: {
          latitud: -34.572362892267776,
          longitud: -58.478607058827635
        }
      }, {ubicacion: {latitud: -34.59063689150737, longitud: -58.48808658187618}}, {
        ubicacion: {
          latitud: -34.539233998149605,
          longitud: -58.42213635719701
        }
      }, {ubicacion: {latitud: -34.584963687205956, longitud: -58.3973516815388}}, {
        ubicacion: {
          latitud: -34.542230643321574,
          longitud: -58.484602571024034
        }
      }, {ubicacion: {latitud: -34.63409964001509, longitud: -58.46976549546457}}, {
        ubicacion: {
          latitud: -34.5935709738193,
          longitud: -58.38559542189497
        }
      }, {ubicacion: {latitud: -34.582140239521244, longitud: -58.393975116917005}}, {
        ubicacion: {
          latitud: -34.54374759311539,
          longitud: -58.439302341274264
        }
      }, {ubicacion: {latitud: -34.608562650182535, longitud: -58.50407693332942}}, {
        ubicacion: {
          latitud: -34.614438073935546,
          longitud: -58.447539030286805
        }
      }, {ubicacion: {latitud: -34.54795250260646, longitud: -58.502403012550296}}, {
        ubicacion: {
          latitud: -34.60790023356324,
          longitud: -58.44957828017826
        }
      }, {ubicacion: {latitud: -34.59325257630996, longitud: -58.42676911412567}}, {
        ubicacion: {
          latitud: -34.604923940669345,
          longitud: -58.45351777457274
        }
      }, {ubicacion: {latitud: -34.64119218775627, longitud: -58.4463483014409}}, {
        ubicacion: {
          latitud: -34.60336685778563,
          longitud: -58.39801768423355
        }
      }, {ubicacion: {latitud: -34.629031455845315, longitud: -58.460578876608636}}, {
        ubicacion: {
          latitud: -34.58760782004702,
          longitud: -58.38632376830938
        }
      }, {ubicacion: {latitud: -34.581314988757164, longitud: -58.43044529064131}}, {
        ubicacion: {
          latitud: -34.603250392912436,
          longitud: -58.42149207207541
        }
      }, {ubicacion: {latitud: -34.54628393374184, longitud: -58.532839753381104}}, {
        ubicacion: {
          latitud: -34.54095523195102,
          longitud: -58.48734361813576
        }
      }, {ubicacion: {latitud: -34.59196723838535, longitud: -58.370852023828455}}, {
        ubicacion: {
          latitud: -34.602273789203615,
          longitud: -58.386974975591194
        }
      }, {ubicacion: {latitud: -34.61066355636891, longitud: -58.50574484960776}}, {
        ubicacion: {
          latitud: -34.623818930780025,
          longitud: -58.50525953557293
        }
      }, {ubicacion: {latitud: -34.64851547059917, longitud: -58.4182542690267}}, {
        ubicacion: {
          latitud: -34.598294209482866,
          longitud: -58.49209900601929
        }
      }, {ubicacion: {latitud: -34.646553252094215, longitud: -58.398375488950656}}, {
        ubicacion: {
          latitud: -34.64582797029398,
          longitud: -58.44276255503954
        }
      }, {ubicacion: {latitud: -34.545293819334546, longitud: -58.417299056140905}}, {
        ubicacion: {
          latitud: -34.58641363937197,
          longitud: -58.4045525574969
        }
      }, {ubicacion: {latitud: -34.59970759226314, longitud: -58.48596216909825}}, {
        ubicacion: {
          latitud: -34.616053757149366,
          longitud: -58.389282181376466
        }
      }, {ubicacion: {latitud: -34.65614909108708, longitud: -58.41904108289955}}, {
        ubicacion: {
          latitud: -34.600105566732815,
          longitud: -58.43308760337429
        }
      }, {ubicacion: {latitud: -34.62553866199372, longitud: -58.44454489825185}}, {
        ubicacion: {
          latitud: -34.55992485263698,
          longitud: -58.45031519450303
        }
      }, {ubicacion: {latitud: -34.5886333569451, longitud: -58.53367123933378}}, {
        ubicacion: {
          latitud: -34.56110134340545,
          longitud: -58.478660777121
        }
      }, {ubicacion: {latitud: -34.58847311770659, longitud: -58.513998536275025}}, {
        ubicacion: {
          latitud: -34.65482386436938,
          longitud: -58.36488553664128
        }
      }, {ubicacion: {latitud: -34.55560945988776, longitud: -58.46143439963176}}, {
        ubicacion: {
          latitud: -34.55499540397646,
          longitud: -58.42404676595912
        }
      }, {ubicacion: {latitud: -34.63061595062164, longitud: -58.37702599881571}}, {
        ubicacion: {
          latitud: -34.5643448662417,
          longitud: -58.520590272104926
        }
      }, {ubicacion: {latitud: -34.651269491033595, longitud: -58.36943840212876}}, {
        ubicacion: {
          latitud: -34.63664704255149,
          longitud: -58.51257006687174
        }
      }, {ubicacion: {latitud: -34.55553740491804, longitud: -58.440181254164514}}, {
        ubicacion: {
          latitud: -34.59863102471262,
          longitud: -58.46953424658748
        }
      }, {ubicacion: {latitud: -34.62191540593684, longitud: -58.43558762552159}}, {
        ubicacion: {
          latitud: -34.62945382208539,
          longitud: -58.392693640410336
        }
      }, {ubicacion: {latitud: -34.65458173051326, longitud: -58.53613938326971}}, {
        ubicacion: {
          latitud: -34.62569984985447,
          longitud: -58.500945886400395
        }
      }, {ubicacion: {latitud: -34.56619197538097, longitud: -58.48100808903729}}, {
        ubicacion: {
          latitud: -34.644469747297975,
          longitud: -58.45810275705967
        }
      }, {ubicacion: {latitud: -34.65661506845847, longitud: -58.51330680613506}}, {
        ubicacion: {
          latitud: -34.651028068725665,
          longitud: -58.49284452849583
        }
      }, {ubicacion: {latitud: -34.6508957214084, longitud: -58.405562049518856}}, {
        ubicacion: {
          latitud: -34.54162577914141,
          longitud: -58.532781838272165
        }
      }, {ubicacion: {latitud: -34.61505408392804, longitud: -58.51934352382738}}, {
        ubicacion: {
          latitud: -34.598759505934694,
          longitud: -58.381313515628676
        }
      }, {ubicacion: {latitud: -34.545725246334605, longitud: -58.53467766844429}}, {
        ubicacion: {
          latitud: -34.55040864908449,
          longitud: -58.525248872576164
        }
      }, {ubicacion: {latitud: -34.56141130734261, longitud: -58.370932279072335}}, {
        ubicacion: {
          latitud: -34.53886369200402,
          longitud: -58.41420178029602
        }
      }, {ubicacion: {latitud: -34.65292382889892, longitud: -58.539068622155156}}, {
        ubicacion: {
          latitud: -34.64437212465572,
          longitud: -58.53716358178411
        }
      }, {ubicacion: {latitud: -34.573969431008045, longitud: -58.37522935013787}}, {
        ubicacion: {
          latitud: -34.6370928415319,
          longitud: -58.400981484803694
        }
      }, {ubicacion: {latitud: -34.56271915158948, longitud: -58.37470596046519}}, {
        ubicacion: {
          latitud: -34.620086352247874,
          longitud: -58.364650881736196
        }
      }, {ubicacion: {latitud: -34.61892199242242, longitud: -58.39508442857419}}, {
        ubicacion: {
          latitud: -34.576299843898326,
          longitud: -58.49066874768908
        }
      }, {ubicacion: {latitud: -34.627336153924965, longitud: -58.528251667123186}}, {
        ubicacion: {
          latitud: -34.60277111310036,
          longitud: -58.42361199229227
        }
      }, {ubicacion: {latitud: -34.62773243773251, longitud: -58.42254708575442}}, {
        ubicacion: {
          latitud: -34.60629279800154,
          longitud: -58.41901152592044
        }
      }, {ubicacion: {latitud: -34.54580813083167, longitud: -58.50088857481816}}, {
        ubicacion: {
          latitud: -34.64155680022591,
          longitud: -58.42627331116463
        }
      }, {ubicacion: {latitud: -34.65145245017089, longitud: -58.484308997594006}}, {
        ubicacion: {
          latitud: -34.63375045469024,
          longitud: -58.385559335361314
        }
      }, {ubicacion: {latitud: -34.64831728638168, longitud: -58.4436348747521}}, {
        ubicacion: {
          latitud: -34.60283359235306,
          longitud: -58.367109812837384
        }
      }, {ubicacion: {latitud: -34.5798359049819, longitud: -58.522062624016016}}, {
        ubicacion: {
          latitud: -34.631282318598615,
          longitud: -58.46133194201307
        }
      }, {ubicacion: {latitud: -34.62565716097982, longitud: -58.40171741430437}}, {
        ubicacion: {
          latitud: -34.650264667470786,
          longitud: -58.38259465030062
        }
      }, {ubicacion: {latitud: -34.60324883265399, longitud: -58.42251629012197}}, {
        ubicacion: {
          latitud: -34.599657938411504,
          longitud: -58.383260884836915
        }
      }, {ubicacion: {latitud: -34.58446395757358, longitud: -58.49793804556246}}, {
        ubicacion: {
          latitud: -34.621956557675674,
          longitud: -58.47130240422096
        }
      }, {ubicacion: {latitud: -34.6531105067951, longitud: -58.482661725011674}}, {
        ubicacion: {
          latitud: -34.57744209417114,
          longitud: -58.47091050507998
        }
      }, {ubicacion: {latitud: -34.635993064968424, longitud: -58.53081514826708}}, {
        ubicacion: {
          latitud: -34.60029141553564,
          longitud: -58.44021448022016
        }
      }, {ubicacion: {latitud: -34.55293556816278, longitud: -58.397224638346685}}, {
        ubicacion: {
          latitud: -34.53963250382746,
          longitud: -58.42215718741796
        }
      }, {ubicacion: {latitud: -34.61498552367634, longitud: -58.40493457972905}}, {
        ubicacion: {
          latitud: -34.56854929483777,
          longitud: -58.374198517175074
        }
      }, {ubicacion: {latitud: -34.54640682792013, longitud: -58.45153735387199}}, {
        ubicacion: {
          latitud: -34.54053651176997,
          longitud: -58.46992160725407
        }
      }, {ubicacion: {latitud: -34.57516180331716, longitud: -58.40527995776931}}, {
        ubicacion: {
          latitud: -34.60028609340614,
          longitud: -58.39415300823272
        }
      }, {ubicacion: {latitud: -34.65313285515086, longitud: -58.38559779492859}}, {
        ubicacion: {
          latitud: -34.65178434612278,
          longitud: -58.49364588073486
        }
      }, {ubicacion: {latitud: -34.639542052309224, longitud: -58.426156794766705}}, {
        ubicacion: {
          latitud: -34.60189052812055,
          longitud: -58.476420272432
        }
      }, {ubicacion: {latitud: -34.652104998278986, longitud: -58.44332310785933}}, {
        ubicacion: {
          latitud: -34.593762190642586,
          longitud: -58.54175209364037
        }
      }, {ubicacion: {latitud: -34.6455971967899, longitud: -58.412317254098184}}, {
        ubicacion: {
          latitud: -34.64217104867261,
          longitud: -58.414536431336685
        }
      }, {ubicacion: {latitud: -34.63342494642666, longitud: -58.48141156110649}}, {
        ubicacion: {
          latitud: -34.6201854512262,
          longitud: -58.438905414449614
        }
      }, {ubicacion: {latitud: -34.59619915553858, longitud: -58.38525997829028}}, {
        ubicacion: {
          latitud: -34.65179167015955,
          longitud: -58.486641641697275
        }
      }, {ubicacion: {latitud: -34.54154193835784, longitud: -58.47850032012839}}, {
        ubicacion: {
          latitud: -34.574479720616125,
          longitud: -58.44949019131146
        }
      }, {ubicacion: {latitud: -34.5711468067201, longitud: -58.448828404846594}}, {
        ubicacion: {
          latitud: -34.58397730292247,
          longitud: -58.46446298695798
        }
      }]
    }
  );
