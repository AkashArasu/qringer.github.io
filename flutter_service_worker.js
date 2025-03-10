'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d4e0ef3b45fba5acefb4cd89d198add7",
".git/config": "38563a51863d556fd5168dbb8aa1adb2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ff84147cd9181ebd41197759bd8704dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bda3de7b496a5e81a152888acd942423",
".git/logs/refs/heads/master": "bda3de7b496a5e81a152888acd942423",
".git/logs/refs/remotes/origin/master": "63cee37ed31042306f7a7692da9ff592",
".git/objects/01/435b2fd0d06e18930a2ef499fa33109b519b20": "4b3a42b925b813ea9faf8cb195bd8d91",
".git/objects/01/7cb5c7b4fcaaa352301c1932d2e337fd3215c8": "0c10a0a9d4db304e90bf735c1ee94469",
".git/objects/0a/c73308c7825e83e4b2530fcf18501ed1da7a73": "03063f7530bd6db2266fec7a55dfa9f2",
".git/objects/0c/3604660f2827b7295c629a549d9b66fb7a860a": "7e2c8c822f0f0a84ce4cfe1905dfcd0e",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/5b80b39bc8d2c54621133f897142991c34f564": "76b03a533e046abd2fafa6c039954193",
".git/objects/14/a8c93799c5b88a0d95a2748933ea8ed13eac8f": "4b6b104ac3437cd158ff9d431cf13d57",
".git/objects/15/3b07ca5c2072f804b7c63e0e470598c829f892": "0415d34968f8d6d61b922a1b70e3c9f4",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/917c1be7519ce6f79b2bf3bea8151ea3194008": "014b397a1ec87842b30e8c7a6be93694",
".git/objects/1d/f71d5f43b70db56df22ae0969b6e38dac05b29": "0432917c6134efed455604b0872a96bf",
".git/objects/1e/d2c3169fa34e46bcb1e8185db14d1d60a61b41": "a4427242462661131d9f30dc1a72d7ab",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6e967a36123fefd23e628039b05f871cecafc6": "46cc7f22091e758f7ab976bc454eb931",
".git/objects/20/bba228f304525bed64497cd70aaf3a351b441c": "5a75e9d7b2288379ff41924e6b888bc6",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/23c63bd670148a53343d481e95bb68c7973af2": "1e2a1919df90b14574b4d451874adf5d",
".git/objects/21/2bc299084a7673f24871e46a18f9e06a278e03": "903c1646e1e2d57e90343c603d7acd62",
".git/objects/22/dfa8c957cf62b1ae0966b27a316826849c1369": "b6cf684821a3a21ebcdeda5442d56f65",
".git/objects/24/193452c8830622675d5be7549f3115ae9a5290": "2d845153d4b0a5237e2fecc8cd09a787",
".git/objects/24/edbc7c414ceb81f251a54db0c5e1d076c9d351": "7d62b27f0528ca14fcbdda464c8de570",
".git/objects/27/3cb65b369f74fb87fbe752e02609f6eab66a1a": "0a3740d717f7e65ec096f00294be0017",
".git/objects/28/6a2db1899b4eb9e2b50f1592f3b5d27411f521": "26aa380db5a2118817156c4210299989",
".git/objects/28/9b6d2e68e8cd0c9633b7ef9ec778be3dd0a403": "5a5290a26f34deeb40590c3a811f93a7",
".git/objects/28/b4a490a1172e62d543c34a1b7a1100260f64e5": "6f86bc57f7a32cdcf3a7872160ac0e9d",
".git/objects/29/f419b34566b59ded49eebad8fe3bbc83e6cc24": "39d290deadf4a39473e7345f78a591c5",
".git/objects/2b/e02d871039c0afa91bd4e2b811e1f9e7554a22": "68b07aeb4094f5e7e97dc6cecddc0af7",
".git/objects/2d/9f552e340fedd67cf173a0e8674cdeafa1ebfb": "260b824a752e505eba14e3c07dd59f98",
".git/objects/2f/005f34267f85c936c2423894d64a45ab653bdf": "2c862b1d352911be92678cfed9e8b9d1",
".git/objects/2f/3fce75331012bb82f08d59cd3d376080b14c38": "15c794e991678e9c6c2fd5cf68cb4a10",
".git/objects/32/547f4bdea5444ef0c114ead82cc459318491f7": "a82c4dece4d4f7d83cec35a589836413",
".git/objects/32/d1c7b3a30e348e4cfc8028e28fc0d304991703": "f507808c476ba9529e6814aecfb03394",
".git/objects/33/34b86d3a777cecf4f71c20b6ef865a50538d59": "7c006ecc810fc50042c5ce561c578f86",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/62116a239d90a9fbd73cb49748ef22984adcdb": "b05072a3d5d90ddd154d3c45c72ebf8b",
".git/objects/3f/3c4762cb9b4b5ae584c02900c877768e70fdcb": "7e426801df514a14e777fef2b10eacd1",
".git/objects/41/b22464535a5d2b94224e0df081a78c881ed637": "d98b1146a4fb4135e46af1865ef39237",
".git/objects/47/2fbfe6369de1739323d16cec53b7f4ab44eccd": "94a0844693cad95be89e03bdf02fb0a8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/f80d5843b2017f06f5210e13edfdce50f035d5": "96f55ce0c5dc8f20f7150d12afb5dc40",
".git/objects/4a/be7465edb0e8b7e9c52b24c23c40ad22c05fad": "1ec46885c7643747d750406a6537d24a",
".git/objects/4b/0840a55d0f49197ebda3762fe893474034aff3": "b26b824dc3dcd4bf4fedb5542dbb2e55",
".git/objects/4d/084b360c9c4de454e379d3a67dae8bcbcd4712": "d516e5e5b9194cf2c327291037eec39e",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/54/260ecc171df8492e9727753d685a85af5760d9": "bbe1345181e70a6bbcfd6307b9905bfc",
".git/objects/56/f71fcbd0a216f3475c31afd73edff093e6c6e7": "2645805c4c46833f398df586b0bbaea6",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/53854ecebf65f89475c9a66f30c519d914482b": "4e8e02815a6bc2203536b1bb62bd76d3",
".git/objects/5d/ecea34bee478361ec69c658ceeea4f395fc95e": "8e3ddd09c753da385a0b52bd6e9e6e79",
".git/objects/62/2d2133075c6e5b2b4aa2b80e2c8445cf45bb70": "1528357aa7a710b917dabc63da4fc8ee",
".git/objects/62/96848a3ec218a33ee29eba135cb59c0cb7d2ab": "2dc73b6854a74f65b8f98c140002441d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/5babe94a935f1708217269b54074a09c5ca9e2": "fbc719b92ffb7e37b23838ea2984d4a9",
".git/objects/63/a8ed5529a4387de7fa2a67396ce7d0ce3d7f09": "081dcdfa685e9f4a364589638c3502a4",
".git/objects/63/c15cdd662a37f31f34577da756c4306fc29694": "33633f9d23f7893bf0bc3a69713a3786",
".git/objects/69/80780c598480516e6567a1108b244304c4eca3": "951d3d4e6a9c7bd3c9540353252fe0e5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/f12dce9342b22c970a3dbb7a26b691826f8e01": "4b3e030d2cf77206392b89611c2c50eb",
".git/objects/73/f982053480a4416893dc2ed364f9ad839d1095": "00a50f748c50bd0c8bf3a1347c083048",
".git/objects/75/1b870bca07ac6cec7afaf379f10d85bbb49469": "979e838d967c33f4252f6891fd5399bb",
".git/objects/78/a3bb657c39d8eb9941a141028ff25011b8bc74": "0c6739e0f5835f2b9709658764d426dd",
".git/objects/7f/07fb003377b894d692acceda40fd8546cbd1ef": "76c1cfc0677aaed80b9c1f866af0b062",
".git/objects/81/6aa6e33b19edc5bb0681ed0a78d03088b7948a": "ae93900f4a13cb31b033635db5d54416",
".git/objects/83/ab810f5d96eda7d45b44fd3e0f143c04a6b486": "3af62fd73ff208f68386f2a36a3318b4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/a98235d9312731acf3fbccdaf3b5684ad7b94c": "2ace108c363cf7ec4e59da1566efae79",
".git/objects/8f/b3253db92f74c631f2d97b2b5b52c33330edc6": "0fbbf804477edcd4c7a0320bd7c8da99",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/892e7d26393960c218c525768d40c159868abe": "52b51b61f7440f6e6e085662a9ce1161",
".git/objects/94/8b816f2b637d0f78d8d128926bc6839edd871c": "a16e7852748efce22ddd17d20ffa5a89",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/bcf40fca0c45d3a3b78290aecc5d5bfc4e0206": "ba41bdf9c512fe78afdf967a15170fa4",
".git/objects/9a/83bd4b82f771093655495db97d7f32b41ef959": "e562a177e5e184f0f1d085f9731c0576",
".git/objects/9c/af3354c48932890a959fd21639c05770383de0": "4cda9fca187f81eebcc1296daff65621",
".git/objects/9e/8dd0a5630904d04e960cf12326bf7ca7bd4902": "1351ef2771f453a1a5c24240eeee1484",
".git/objects/a2/b8627d7fcec9d60833565023289bfc3ffea3a5": "86fc1fd3e37a38cc1550d4873037a3a0",
".git/objects/a3/24cd5d49053cf74fc4efc200339ef7d9383968": "8ece1d5acee8144fd8a01421e260ce62",
".git/objects/a4/faacc8e181ccb3752484a2ebba16ffe9df8ece": "6ea9db2f6f3d4b9ebf7ba8e9ab7f2e7b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/ae658692f910df69730a752aef7ac69922469f": "8f1bf14d208ebfd4b3467d6aa894d82e",
".git/objects/aa/f80166bae98c68bd33783c101e7bcc0f6f56d0": "7aaf517c2c8e997e22a1ff2c5bd19980",
".git/objects/ac/9199bc44ce76817399b31c5137e1bbaa824f5c": "78c213891e493f8dcac20c505813ff7e",
".git/objects/b0/02acaf78c24e16030f3ac62dc2fd1c9ba05062": "8f150efe2c04b1df7b0a9e70917bcfd5",
".git/objects/b1/acdd2915b65b634086cba506a367ac48d23a67": "1ab0808d42b349de59a8bf7c794dbb05",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a90d4364f593ca49b51c95c087e701644fe1b7": "d437fdbb89cb63b8548990dce863048c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/b2f96e4545807f78b2196dc76b23d7e003e84d": "0a16be2713300ec42e5f85d55d43eddd",
".git/objects/bc/14b0f97ca0c9f408e2e3a1154784c4d43413dc": "49ca6d442477d4a7b4f9160c5a3e714a",
".git/objects/bc/6b9e8c6c5327a96bc9092b804bebc7f927177e": "9f0dc237b4afdc7d3eaae52a2503b913",
".git/objects/c2/296dd8faf46e57b2e0328760f95d3e861190d7": "962cd2caff92e8c2a4c2bfd4a9248452",
".git/objects/c8/543a1131f903e7ac219be9b2f902670c011a80": "17db3821dc01b80ffefbc359664cbb67",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/c6a09b352fd94ba2756af98e2b0312f7b651b3": "c1f24856ce5942e451cafd215d3ad90a",
".git/objects/cb/b6af92fa047440ce834578a01e1a975bc87663": "cffa924d4ace863c0ac91635a0dbd9ce",
".git/objects/cf/5f2a3917d4ddf52941873e5a52a0f82156b80d": "8d11a595699cc65721f6094096a38357",
".git/objects/cf/e5ead2522f9624091660791f0e264cfe59ad45": "898f4b5f64e2b67c3909eaead848f568",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/8fcba77fad14ca28ff21e62152dd9fff575b67": "1c08f3c0215134d9cf2519a208ef9f60",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/f5ffb48970ccae53a8171163e1682f0372b257": "8ec6d6512b5e74e8337824d380ffde40",
".git/objects/e2/35d2941c2b25bccc2eeea5021d33566a0825a2": "027d78987c0c2bd92ce824b3ab232aad",
".git/objects/e5/5a494ff0b49d2162e3b5eb67252d1b2ca71218": "9f35517f377b50475f6bbcf51b6676c9",
".git/objects/e6/080e971e376d43ee0fb258521ebee8020d1262": "0388781902dcd3b1b6a2e42d6565cda1",
".git/objects/e7/58efbd362c394743b8eb51f72d36a9930d8adf": "63f33cdee9eb8350161038e3e5a43f30",
".git/objects/e9/1a1041eba38180e03afda7807701d667cf897d": "6e9cd3bafba620402204927bfd3f8c9e",
".git/objects/e9/5a6f80db780c1753cbabfa72b0301372948bd7": "d72567f99d8a61de18c91b15f5714954",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/11f8f87d8b060f8ddd20636dea8e7a30e56233": "9bb9fab6e1cd42474c07f239c654c9d4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e3b6affac45818a41825b76729b4523b58f404": "a54bbfea3fcc1fd82541c0aae72c3073",
".git/objects/ef/97748786e834a64381ea2f11b339bb0f18b159": "038a8a595b0c817e19584329196c9041",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/1a7e7ddc3de6a7732a43210eaea3ffbc7bc3c0": "471751e2e00230ad7f9d7a41e64efc23",
".git/objects/f8/c8d086f6cad1a26e1e72e15b93615569172d74": "82c49930670af36d02b7ae38bbcd24d3",
".git/objects/fc/5ec913d700a496d97f7cbfa30fd9fce4e8dbe3": "cdcac2f3100193613c415bc42139b2ca",
".git/objects/fd/444a2e4b0252212b0d70c4e0095cbb4bd156d7": "968e2e2e29b8cb1c660d759038a5cda4",
".git/objects/fe/7e423d7e738f296c98f466e844d83a3c3a0c3e": "ade55940c96a217a4a8572263d4b0f13",
".git/refs/heads/master": "4f0933f507704c6a7663c03d7f5a9399",
".git/refs/remotes/origin/master": "4f0933f507704c6a7663c03d7f5a9399",
"assets/AssetManifest.bin": "869729a025919d432a61e75a49a16e49",
"assets/AssetManifest.bin.json": "eb08bb1eafe981bec700b051322caab5",
"assets/AssetManifest.json": "0b758eb29f07afc012bd2ebfaf757534",
"assets/FontManifest.json": "ffd24d2700b5468d649cfcf79c82c19c",
"assets/fonts/MaterialIcons-Regular.otf": "55d15af66ade004acd3371cf1e57dce3",
"assets/NOTICES": "eddeef0d89a572537b7419d05cd29fee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/stream_video_flutter/fonts/StreamIcons.ttf": "ba91e91a4e3aef03b5bd34cce233ab66",
"assets/packages/stream_video_flutter/images/call_background.jpg": "036491bc8ddea81e3b0763d363a7ae6e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9d45785c9f9f79424a24d58688aa8892",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8723056bbc85209b27ef0772adb22c12",
"/": "8723056bbc85209b27ef0772adb22c12",
"main.dart.js": "6d33b0448a721c0b068009cbfbd2aa3c",
"manifest.json": "f0a51676017c8dbe8fa2b70f5eb3b5d8",
"version.json": "4684ecb4d1bf51cbb7eb07bf670d28d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
