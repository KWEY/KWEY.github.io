/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/11/14/brower/Cache-Control/index.html","daa0e58e4ba10feb0902b53a79ce03b0"],["/2020/11/14/brower/cache/index.html","1d09628289b2f4691d30c168f3c0208f"],["/2020/11/14/brower/cache2/index.html","d715ac88e9324c35b66ca6c7d9b4e58b"],["/2020/11/14/brower/chrome-performance/index.html","4f519550edd4313885d687c9f4385861"],["/2020/11/14/brower/repaint-reflow/index.html","9d67c913c7b4396c893eefeaf6cb2dbd"],["/2020/11/14/css/bfc/index.html","52b423c4a9c5d47f50b919e5fbf33d4e"],["/2020/11/14/css/css-box/index.html","a67f217b222a00c2084d1aef0ea60317"],["/2020/11/14/css/flex/index.html","361e53edfccb2530376b140e6f57c633"],["/2020/11/14/css/hide/index.html","ccfcbd41a8cc396a6def968739ac7df1"],["/2020/11/14/css/layer/index.html","4028a634a840f5742f2e4498f499ad9a"],["/2020/11/14/css/layer0/index.html","6a7d0d687ae378ac42da3ffe71de9099"],["/2020/11/14/database/Innodb/index.html","95ac8799703cdf7bdaeb2e4d211b5019"],["/2020/11/14/database/centos-mongo/index.html","c6adc09de135830408ec7aa8765f5dd8"],["/2020/11/14/database/mariadb-mysql/index.html","114cc299f3ce0cbf691fa5a5a95ef3cb"],["/2020/11/14/database/mongo-restore/index.html","c30d71b47e61c03f1c2051c4adadffc0"],["/2020/11/14/database/mongoose-populate/index.html","027173764abb6667cc1c33c911c78e67"],["/2020/11/14/database/mysql-transaction/index.html","de54daae0aa86f297eea8604cf88ec61"],["/2020/11/14/database/mysql/index.html","ced919a08a147fba110c7f4dc816c5ee"],["/2020/11/14/frame/cmd-amd-es6/index.html","d8991ec0ff5d6aba275b23202597bf28"],["/2020/11/14/frame/express-session-mongo/index.html","40042a4bc7516de308c725a48b6ea428"],["/2020/11/14/frame/nuxt/index.html","e6b4a21fbc4e1d40671f8a1d3be9cb43"],["/2020/11/14/frame/react/index.html","6555fb49586956bafc9f7ad244aeac2f"],["/2020/11/14/frame/vue-life/index.html","f64dcff24ae313c78bbc00ecf1a76eaf"],["/2020/11/14/frame/vue-nextTick/index.html","beb57eb691fa611dd6eade7cb0c7a386"],["/2020/11/14/frame/web-mvc/index.html","81139c03fa48c87b556f16f68f92c2d8"],["/2020/11/14/html/cors/index.html","30c97c31145422640beb5801a05ee281"],["/2020/11/14/html/history-2/index.html","8daa432c2f62b646bd3706c37e8fa247"],["/2020/11/14/html/history/index.html","ee92436972d3b5b5f4cdab9d6bd02777"],["/2020/11/14/html/html-render/index.html","5848b92118fc7618c744cd741cbef53a"],["/2020/11/14/html/link-preload/index.html","0ea427155039d16ed39c337b7dc8db87"],["/2020/11/14/html/link/index.html","9db6da1d215c9c26e7ee44295cba7cac"],["/2020/11/14/html/nofollow/index.html","2f66ae735f43f1ae6ee450e4b2a61245"],["/2020/11/14/html/video-auto-err/index.html","9569770525d055e26a5ea41f944de123"],["/2020/11/14/html/video-auto/index.html","5a6dd654918ad8656dfb062c45f55ae9"],["/2020/11/14/html/video-play/index.html","f80877cd8699b9d2948e4861ab7d6e70"],["/2020/11/14/html/video/index.html","0f6e39eb00a99038e0af49109e8936bb"],["/2020/11/14/js/MessageChannel/index.html","3f0b8239746e4095a684f540f3131ce9"],["/2020/11/14/js/MutationObserver/index.html","0950aa62ac3d3888631b4af89cee9f3f"],["/2020/11/14/js/addEventListener/index.html","a542c11abca85eb125139aeab053a0fd"],["/2020/11/14/js/binary-tree/index.html","a272c0d36b226300c710996d43e1f19f"],["/2020/11/14/js/bind-polyfill/index.html","b40cfbec3589327b6e1575a19dbf5c0d"],["/2020/11/14/js/bind/index.html","a73cbc2c46d7a06a6ae9f1f5c991a8ca"],["/2020/11/14/js/color-hex-rgb/index.html","f841c037b140190bf5068ecd0cf957cd"],["/2020/11/14/js/data-format/index.html","c778ae8e24660872e48347d011dbcdbb"],["/2020/11/14/js/dom/index.html","3e79046bbe42b5ac031192c951231b30"],["/2020/11/14/js/es2020/index.html","db373380fa3b36eaf00c7af10933fb74"],["/2020/11/14/js/es6-1/index.html","dc8040ad072493264149929b861f2969"],["/2020/11/14/js/es6-2/index.html","e59b30f9cf9f1b5e6a5df95406d38f21"],["/2020/11/14/js/es6-3/index.html","953fdea25745c9f5198126bec7ecf8e6"],["/2020/11/14/js/es6-4/index.html","70494ca2c553672415e5c4ee083042c3"],["/2020/11/14/js/es6-5/index.html","6c60e0cdd655ae2755b20f6c5f002f28"],["/2020/11/14/js/es6-6/index.html","ad654ee5793742eb9739709d2343dd89"],["/2020/11/14/js/es6-7/index.html","f02235b489fdd3d1c63b7f8a37e16b37"],["/2020/11/14/js/es6-module/index.html","deae2e759648daee536cfcdd7c6a3fbe"],["/2020/11/14/js/es6-next/index.html","ca01121f4eeab2c85b9026be21ab2091"],["/2020/11/14/js/fetch/index.html","c7d15ae91fdbc340ea145fee51fad1c3"],["/2020/11/14/js/fun-currying/index.html","d36a63aae5e1218c890f653b6f473ac6"],["/2020/11/14/js/fun-currying2/index.html","7993a2c1207fd6084e9081a2812d0202"],["/2020/11/14/js/fun-set/index.html","7157a0c43f5de7dcce0cb76336201edd"],["/2020/11/14/js/function/index.html","9b59c5c9c01a8e20de8dbbc61bde82f3"],["/2020/11/14/js/js-precompile/index.html","667bb38956d7e0cad303037ab3669e66"],["/2020/11/14/js/js-proto/index.html","2150fe370acbf13ac0062f4e93b94d16"],["/2020/11/14/js/js-utils/index.html","305fa5c0e97a43dc97974a2fd9a523c7"],["/2020/11/14/js/link-list/index.html","80f4570a8e0f9b57b9201e7be3493591"],["/2020/11/14/js/micro-task/index.html","183b1f8628734327f05283b56e7f8019"],["/2020/11/14/js/mse/index.html","53914c79ec6dab3b2af7aa8932b99ebc"],["/2020/11/14/js/new/index.html","76a340182c84b345b91cf713d175f593"],["/2020/11/14/js/num-string/index.html","ac4a497faf24189ac27f12dfbaddc062"],["/2020/11/14/js/parseInt/index.html","22fe107cb816edf3c49974c0edf5c179"],["/2020/11/14/js/promise-polyfill/index.html","55895d10303fd8ebd62ca48df7a6c997"],["/2020/11/14/js/queue/index.html","cab66d9d7288160203289b0cd5981d14"],["/2020/11/14/js/regex/index.html","471cfce2793ed6c59233838024f7cf1c"],["/2020/11/14/js/regex2/index.html","986aaf5d21a967eeace899e3102169af"],["/2020/11/14/js/sort/index.html","14144690f954c1c266e9a9a180b71090"],["/2020/11/14/js/stack/index.html","5df35dba8d6f85be73441d94967eb121"],["/2020/11/14/js/textContent/index.html","9130fe63749b39376332acdaae18c025"],["/2020/11/14/js/tostring/index.html","017304df228c8336bbbe4687c869736a"],["/2020/11/14/js/ts-3.7/index.html","d9e785d2c84492aea39023493d6eefcd"],["/2020/11/14/js/ts-dts/index.html","cfda6eaf9b3ec2e7a12580409984def3"],["/2020/11/14/js/video-demuxing-muxing/index.html","8b35d7b0e6b545dde2c102b853f4e80c"],["/2020/11/14/js/web-err/index.html","7a4b9cbc4c61b5016c7f78b5fd96a1c9"],["/2020/11/14/js/web-worker/index.html","425b219b2f46dc4473316545de81c422"],["/2020/11/14/js/xss-csrf/index.html","e3e2d18dd24fa1eb644667001400f3b2"],["/2020/11/14/linux/centos-cmd/index.html","6ca6daee7e99572e57eefd4384e87644"],["/2020/11/14/linux/centos-node/index.html","fbc60e73a67d0cf89bb15a752f97c44f"],["/2020/11/14/linux/crontab-1/index.html","0aa46e424d44b7f8e39671914c64ee0a"],["/2020/11/14/linux/crontab-mongo/index.html","e4fd67e4130b07d3c594d4b87ca1d2b1"],["/2020/11/14/linux/crontab/index.html","1f9da1bd8337ede1f00aaf374fa5c673"],["/2020/11/14/linux/firewalld/index.html","1689a8b43922dee5b9164df31fbdd253"],["/2020/11/14/linux/google-bbr/index.html","ebea06e066ac7aa18de4cfd712b36897"],["/2020/11/14/linux/java/index.html","ae45d6d4c97007cf866765d4c06b1745"],["/2020/11/14/linux/jdk/index.html","f9f33ad7ab0080e3d17c399f2726f38c"],["/2020/11/14/linux/jenkins/index.html","27e1d1802b6762b4eb2d91477adcc81d"],["/2020/11/14/linux/kcptun/index.html","cc4f84abfcfacecbdb1369eac298b9e1"],["/2020/11/14/linux/nginx-n/index.html","794b4fbec0d2863a64b59ac84465bc9c"],["/2020/11/14/linux/nginx-proxy/index.html","9d92545e8bf6f63ebcce8d7a757616bd"],["/2020/11/14/linux/nginx-root-alias/index.html","fafd0c710e8acfdfc1a5f606f425c948"],["/2020/11/14/linux/nginx-ws/index.html","52ef111e807ec957c5d5e9526d7ebc1a"],["/2020/11/14/linux/nginx-wss/index.html","33dfd45c430e8e9053c3849167443061"],["/2020/11/14/linux/proxy-reproxy/index.html","311bd88b86774149e2f0d46db0eabd38"],["/2020/11/14/linux/vi/index.html","e204dee7aa565de3d90346b7edf408ca"],["/2020/11/14/linux/yum/index.html","e75b558375550d108f96df00b5c4a4c5"],["/2020/11/14/network/cookie-parser/index.html","304af159bd8ed3afa46de9b9b285013f"],["/2020/11/14/network/cookie-session/index.html","a1b7d27fd072943a110a5860a224bf92"],["/2020/11/14/network/dns/index.html","60f1da036e91acf4ca259d8b24b1b87f"],["/2020/11/14/network/http-206/index.html","f4343e069381d406a608296d2e91f674"],["/2020/11/14/network/http-code/index.html","ed34b2ad30931c6dc681acb639543f71"],["/2020/11/14/network/http-cors/index.html","e11d66d2af9bf16b55852ca11acf8720"],["/2020/11/14/network/http-differ/index.html","76d71d0c7e4969dfcbfbf267d01da178"],["/2020/11/14/network/http-get-post/index.html","069d48994b7d5277fe605eb412e0ea0c"],["/2020/11/14/network/http-histroy/index.html","c0c1f2a85890a94993dbf7726058b34b"],["/2020/11/14/network/http-https/index.html","f08fd1fa94b36515110418c3e13c019a"],["/2020/11/14/network/http-info/index.html","12facd3983c1cf74464b5382a7ba4267"],["/2020/11/14/network/http-len/index.html","a659a7344a0316a121ffeb57c6be6d18"],["/2020/11/14/network/http-url/index.html","5d819ff644cae40fde071630ce848fb8"],["/2020/11/14/network/symmetric-key/index.html","ac972892d905222673c4db92dca56229"],["/2020/11/14/network/tcp/index.html","0c3dc9c8dd3dd70f1177f26108160418"],["/2020/11/14/network/webSocket/index.html","bc13a46d405cd8585d60b7a5f505dfc5"],["/2020/11/14/network/xhr-buffer/index.html","62906817a395245023d8c02b83ece772"],["/2020/11/14/node/cmd/index.html","a135793839574f07bfa4058ab87feed7"],["/2020/11/14/node/express-middle/index.html","b05cc906d09d39e2cfa0553d506da93e"],["/2020/11/14/node/jwt/index.html","0fff30730ceede444cab5c7607a538fa"],["/2020/11/14/node/node-schedule/index.html","efac0516fa81572b0dfa7b12d403429d"],["/2020/11/14/node/node-ws/index.html","274dcb870c2d5a5215797ecc77c41c38"],["/2020/11/14/node/node-wss/index.html","76fab84160f7612528f16721eb2d1082"],["/2020/11/14/node/npm-deploy/index.html","4a5a390610db8537e2be433ec4840c6b"],["/2020/11/14/node/npm-link/index.html","bb65664680d8b72c486ef32ad6b4053d"],["/2020/11/14/other/hy/index.html","299f47027ca81b269e48b3b851134112"],["/2020/11/14/other/java/index.html","5e94c096ab664fdb59c815ce2a4c6dfe"],["/2020/11/14/other/mobile/index.html","61313fc111c39d3bfdb199818386cc9e"],["/2020/11/14/project/babel/index.html","694a681d5b8d6161a06c70c4c5295027"],["/2020/11/14/project/commitlint/index.html","bc437df955abdc24f3b49275b27ff703"],["/2020/11/14/project/github-webhook/index.html","d1b5b21ae7a284772a5df1cb0711d20e"],["/2020/11/14/project/terser-webpack-plugin/index.html","a46d49aebf94d5f51c2189daaba91747"],["/2020/11/14/project/webpack-end/index.html","b4e8302af480b42461082c711b10ad72"],["/2020/11/14/project/webpack-loader/index.html","3fa2a2e2a7072b1ff7068ca90a664de7"],["/2020/11/14/project/webpack-plugin/index.html","11fd5aa27cb772ff9fd439e107d33203"],["/2020/11/14/project/webpack-splitchunks/index.html","880bc447292b9783b261223dc00bde49"],["/2020/11/14/python/decorators/index.html","26a810e4c224ea2e24a6c289c10e3937"],["/2020/11/14/python/django-cors/index.html","9ad984ec5bbb0c0ad7548c404e8afba4"],["/2020/11/14/python/django-sql-error/index.html","b023f50080057b59e4b401d49fb1e917"],["/2020/11/14/python/middleware/index.html","4394e4bf0db2c6d673218820b4009560"],["/2020/11/19/doc/ci/index.html","04152f8c937c6d2362107e93fc165587"],["/2020/11/19/doc/dj/index.html","6c5e2e59103d15e2aac7f57e242b93d3"],["/2020/11/19/doc/dp/index.html","99b5b4b920390dc384d8006260251ad1"],["/2020/11/19/doc/f4v/index.html","466633a9e3b4af589aa3201672df66e1"],["/2020/11/19/doc/h264/index.html","2c955596dc1323cb285c4e3a890b0a86"],["/2020/11/19/doc/mask/index.html","f7e7f14e4152c4177c5d72d80bb650b1"],["/2020/11/19/doc/mse/index.html","ecb40a70a4b1c88f7bf849993ba671ab"],["/2021/02/01/brower/lifecycle/index.html","d8f9c3f3b90d2fd7deb3d0f53afb7cde"],["/2021/05/07/brower/gpu-acc/index.html","4c435e458b3d7d2068cd4457e3eca98a"],["/2021/05/08/brower/fps/index.html","3cc1f58415f2f799c3cd9bec2ee92b3f"],["/2021/07/11/dm-render/render/index.html","ccbdb9982d04e996a3c0e1e817badc8a"],["/archives/2020/11/index.html","c405ff993a457d5471711eb2ab8cc3e9"],["/archives/2020/11/page/10/index.html","2a591c5da0a535da03634a6d3e4ae03d"],["/archives/2020/11/page/11/index.html","3e67b4fb297a48195e6f3ec4e4ab3265"],["/archives/2020/11/page/12/index.html","b4eb375452199c2bfe82901e086be96a"],["/archives/2020/11/page/13/index.html","d2895afae5e1fe6470059cd56c469a20"],["/archives/2020/11/page/14/index.html","3bfd4f9f69fe7fe566faabe4ec1917a7"],["/archives/2020/11/page/15/index.html","72939ddd044a5123c39394bd65eac096"],["/archives/2020/11/page/2/index.html","f6f95e5bee11a4d700c029ba7a101c8c"],["/archives/2020/11/page/3/index.html","e7a98b5e62b435f8de68845077bc34b6"],["/archives/2020/11/page/4/index.html","df81add5c8d14b90ea6d8f4ccad4fb6c"],["/archives/2020/11/page/5/index.html","9c4ae55edc7efcd2c469bb2627c3593f"],["/archives/2020/11/page/6/index.html","1b70cf32779bf0190b7031aced7af2a3"],["/archives/2020/11/page/7/index.html","d98505db98d6b170d20b46aa74e59f6e"],["/archives/2020/11/page/8/index.html","3d6a1578d004d7ae54ffdb79975059b5"],["/archives/2020/11/page/9/index.html","db7863747d141117e5ce117ce6a60c74"],["/archives/2020/index.html","3a6d3a21b0bd51556f2b701987810fac"],["/archives/2020/page/10/index.html","abd1537a92e7fb43662a605aa9f25b93"],["/archives/2020/page/11/index.html","e4e6741b8ac6ee3281110ad6ea1df839"],["/archives/2020/page/12/index.html","f063966f7f7070b8ce6f079c753cddca"],["/archives/2020/page/13/index.html","e75aac13e0dcc58b4e4e66bc3f56ff22"],["/archives/2020/page/14/index.html","6a0961361a50cf03c93c93425bfb71b6"],["/archives/2020/page/15/index.html","88e9ef5f366c073baac7309b7c960e12"],["/archives/2020/page/2/index.html","329f9af693c0bd3022966c2825aa0437"],["/archives/2020/page/3/index.html","55d6cec4c50f15346fea788d50ced570"],["/archives/2020/page/4/index.html","64d95765e5c0abdc610b9a2fe245f521"],["/archives/2020/page/5/index.html","093ee71a9323841ad6a65f26c008e567"],["/archives/2020/page/6/index.html","3fcae953ed52ca146e402152e9a5365c"],["/archives/2020/page/7/index.html","4e8ddae471f738fa2bb3d7625ddcc586"],["/archives/2020/page/8/index.html","4747065a036d8e907e356e67cb7a00ab"],["/archives/2020/page/9/index.html","4e9c01195ed4bb7ef05853baa65bcded"],["/archives/2021/02/index.html","4c13013e898541766646968fb200a5ae"],["/archives/2021/05/index.html","698b909d87c744e27dfced8d9a00a447"],["/archives/2021/07/index.html","c14e53797383c88c4f16445d089c7e5e"],["/archives/2021/index.html","a3416dca2e0f0bb3557c6ccba6085ad2"],["/archives/index.html","d2ef1b85c957c331fa26491e23b080bf"],["/archives/page/10/index.html","bf82f8f41fc8f3756f396528c28daf3f"],["/archives/page/11/index.html","b77fb0a5b4063ced624e2cc54b3ff782"],["/archives/page/12/index.html","573f2dc26d55f922bc75eb7b8fe37650"],["/archives/page/13/index.html","fb9440f1c022f53ff6989e8017aeb150"],["/archives/page/14/index.html","2a6816ff37d88641eada76d05985ab6a"],["/archives/page/15/index.html","2b9fe1c200ebe8c2f3b98e90892209f2"],["/archives/page/16/index.html","7bdc065917fb55ff55ac3a6bcb5db9a3"],["/archives/page/2/index.html","61c9cbbe23722544c4ba9816a874aba6"],["/archives/page/3/index.html","0d0a0fcf73d9619a02d2c63516b0fe90"],["/archives/page/4/index.html","dc0de62e665dc3174b1747b4114c0f30"],["/archives/page/5/index.html","cf654add6302788fd5fc3eb0d16bc4f3"],["/archives/page/6/index.html","91a417fcd702e4dd47dff506558970e5"],["/archives/page/7/index.html","ce628b6f9c48f5f7befed8614fdf3b00"],["/archives/page/8/index.html","2163ef075d1d20f1e7b391b48ea96b23"],["/archives/page/9/index.html","606c5988770866f1ac50a1f35e595da0"],["/audio/audio.js","30af61a128e6d9024464b8581690d2ae"],["/audio/index.html","88cc2cb1ba80b36211d10f7776a3a9f3"],["/categories/Databse/index.html","178ebc25f1f1dc70c27f7eb683dc1892"],["/categories/Javascript/index.html","86b4b1e4936f5153d219192eaa13703e"],["/categories/Javascript/page/2/index.html","112c3f1494ee1a80db0b64fdcd3dfa9b"],["/categories/Linux/index.html","9b2bdf31de7f6b59d96a389fcd1fa0bc"],["/categories/Linux/page/2/index.html","978155c0f95287e6060cbe0b9aff0e7f"],["/categories/Node/index.html","81db472d0b62b4b177e2eb6f097d00fa"],["/categories/brower/index.html","a4fd18fb1bc4a1e7fd661fbe663052fe"],["/categories/brower/page/2/index.html","4d116b27ce13b4050e44a0e709c1c8ed"],["/categories/brower/page/3/index.html","457b1878a433a6e7a1be94732746ba45"],["/categories/frame/index.html","3dd8720d2111bfdb9e54814081f0b7a7"],["/categories/gpu/index.html","342b7251bfeba99b2a90bee48547bc1a"],["/categories/index.html","f178549860a2ae0ea91f3bb76dd3cbea"],["/categories/network/index.html","7c2aa7329593c8ad26d224905316527a"],["/categories/other/index.html","584045928a56e0b265b0232ae99437ad"],["/categories/project/index.html","719423cc2adc9ef59e1ba87a58154d65"],["/categories/python/index.html","9d3c72a471c45c566c6ee58b8ba0c726"],["/categories/web/index.html","affd5005c7d0549e83d06f8cd538a8db"],["/categories/web/page/2/index.html","4f9adf483789b871abf280c0de5ca566"],["/categories/web/page/3/index.html","c60e50250906ab9897a436f841fa4abf"],["/categories/web/page/4/index.html","a09514ac5e25505b8de714ed26c915d0"],["/categories/web/page/5/index.html","182c6fb185e6028a949c6192037f59f3"],["/css/index.css","3f6e305325ecf9be86855d0b92df9df3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/follow/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/follow/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/follow/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/hide/bi.png","17b80f948f7b1155cdaea099894b6ea1"],["/hide/bro.jpg","e4a34350594a3f769a7a941a91e73fc4"],["/hide/bro1.jpg","e971a5b6cd95078e195657cda63a66f2"],["/hide/bro2.jpg","16b171e365f7ad2f0d787781885bee38"],["/hide/bro3.jpg","2acb9b9d0bd9199f889830fc722a0ef1"],["/hide/bro4.jpg","63bc51f06922fedd5143ee539ea9e8c3"],["/hide/bro5.jpg","11e6a3e87a5cf640a01af30817ba9707"],["/hide/bro6.png","f8be2ef79cdf29c8da170e76138740f7"],["/hide/cpu.png","9792bfb92eeba30abd2475ec02162f24"],["/hide/css.jpg","4f38f8da7753934355bb19250a9f47d1"],["/hide/cwnd.png","a7c535f85fd865871017c6d9166ae5b9"],["/hide/fps.png","cfbe01318789f8598896e8ebae74ad48"],["/hide/fps1.gif","249aeae794b38d43df5034aabcabf463"],["/hide/gpu.png","894e6d2f20921e7c8be985bbb0dac5d5"],["/hide/gpu0.png","87c660da468bc57345c2ed36c55d08a9"],["/hide/gpu1.png","ccc61af8639b3d8b40aac964c89495a0"],["/hide/gpu2.png","c88f9fd4d9baf708c353e445bc00046b"],["/hide/gpu3.png","46ce4d820db40e9439bcac253b7be79e"],["/hide/gpu4.png","666857a310fc49a6288979d5615c75a5"],["/hide/gpu5.png","6eeec5a6fa92f7ba2b897d71602e3559"],["/hide/gra.png","f3a31c8e235cbd17f89690249646924f"],["/hide/html.jpg","b1245c9050ba8f4a174e5f74aa81be7d"],["/hide/paint.png","232c4de9606f6e9d2b3ae9f52dcfb974"],["/hide/per1.png","c8bcad8d9e63c271190c35573180049c"],["/hide/per2.png","98d837d2d5eeba008cac1cb2d5ac66bc"],["/hide/tree.png","ad7a642ed9d1b5217098dadfe77bc562"],["/hide/tur.webp","77493749f8f18aaa32b722984f00fd0c"],["/hide/webkit.png","144c9289e3a928bd8dcd096b988b0db3"],["/hy/index.html","83d2944194327dc5f643c8ede1676a0a"],["/hy/piano.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/hy/yyj.js","d578725b70b329f21cacac6910486bae"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/Innodb.jpg","c350cbb23996abfee7d226d8a02090ac"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/audio.jpg","bbc666a99a4abdb92036ff851f5c2220"],["/img/bg1.png","e70b4cf6957d1bb37b501a77319fbce7"],["/img/bg2.png","86abb0b786c270073c641b292f3f992f"],["/img/cache1.png","f3f9894b128aaa71c632eca751c13936"],["/img/cache2.png","e31da6a87b07b1b6d1a6c93e134bec5d"],["/img/cache4.png","a323711c9cf234eb19c8e47fe26de0a7"],["/img/cache5.png","bb5888e6a0ba4a5e9341d922dc59906c"],["/img/cache6.png","79bdc64dc80e61923e3609ffd4881460"],["/img/cache7.png","6718511513b7fa500d8de1b19e3c6eab"],["/img/cache8.png","84ad69b2d5aa201686397afc9420481f"],["/img/cache9.png","fde40c8b01c7a4c312e4741682c3ac78"],["/img/css-box-ie.jpg","0abb576ccbf3e6e29c482880c6c7a177"],["/img/css-box-standard.jpg","f88cc621a037b959111ef3bdc8e8a61a"],["/img/css-box.jpg","96efbf91a11e3e16a69a634afc1aa826"],["/img/css3.jpg","e604bf25aede342b28c270694753fa06"],["/img/database.jpg","6e30f87c1504bf625945e38690931b50"],["/img/default.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/img/default2.jpg","695dc2d6fef5092c43c81a82c73209fa"],["/img/default3.jpg","e6dbdc3eab92a9bfe81f031af6f3fd8d"],["/img/dns.jpg","664bd3007b4aaf137783a90edec4d5bd"],["/img/dom.gif","20a60b70fa7c44e1851284ef2aa84c26"],["/img/e_block.jpg","fe39d2aa5a693ed6fdf3244a0fd43d6a"],["/img/e_brower.png","38870559e6437549ae444014ae5164a2"],["/img/e_storage.jpg","c218c03548192ad23908ebbfda4dc3a6"],["/img/e_upload.jpg","1360d82820f03121c8bb105eba8910af"],["/img/engineer.jpg","648e800cf421297aa800185b0f4b8613"],["/img/error_level.jpg","70f549c05c3a38185a6cd91c3f24b254"],["/img/es6-1.jpg","5a631910388990309719aeea261e5e41"],["/img/face.jpg","48e1278e886117e6a81b09a8abd923b4"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/git.png","661bdf03b566cd9142ed0cb2bbfa5d31"],["/img/guitar1.png","24e09bd84e38a9b778fdb33cf0db4cba"],["/img/guitar2.png","9308d80550d9d23e9a641718ea3c2816"],["/img/html.jpg","15a0ebced997e22423e29d79400b4396"],["/img/http0.png","6fb2c90fcd987ac5f1ed351c46a94614"],["/img/http1.png","48a823ba71f53fe0201c40005eb669f9"],["/img/http3.jpg","cfb71ef15c3c1484de5cbc4b5e3a3e9e"],["/img/http4.jpg","3b774104b448d96052ba49a93a180cb0"],["/img/http5.gif","d404acda62c276b9a3ab90506074307f"],["/img/http5.jpg","9d2a2555b99eac2cdb625bcdc355db77"],["/img/http6.png","5832cc77ea1dbbdc281758e48b5d49c5"],["/img/http7.jpg","38069c638a93d43ea201c081826b8903"],["/img/icp.png","b7fa4a92047987bf65dc954f48f95c3d"],["/img/in_file.jpg","60e8d0496a81b561e73ed7447c951301"],["/img/in_group.jpg","e58036db2375c85a482dc25f00a6d532"],["/img/in_line.jpg","1c65ea519c0e0232abba0476781ec41d"],["/img/in_line0.jpg","6eff2dabe2e6b6ff9226f7ddd904acfb"],["/img/in_min.jpg","2832a095be030ca6254e84a12db80052"],["/img/in_p1.jpg","5062d9c9cf1927f46f708a18fbd04b73"],["/img/in_p2.jpg","1761f0af72bf03e505623132c4dee072"],["/img/in_p3.jpg","c0b6e75d911f826533fa8e428b13026a"],["/img/in_page.jpg","1ca1af032c3b74cee6af758f6afa3ba4"],["/img/in_pages.jpg","452e2d255f53a16f14197ed4c78d0b57"],["/img/in_record.jpg","52fe8010e0bd1195826f7d7fef7effe2"],["/img/in_table.jpg","ed99da9efd84d88bc9981bfd0ad6f5d0"],["/img/ip-info.jpg","137ef3e803ffee1d4722cc5ba6ba4879"],["/img/ip01.png","60372fbdf9d5b16a0b73d054aac78ae6"],["/img/js-pre.jpg","5563fdfc3f0c4cbcf5bc4ff8bd4b11ac"],["/img/js.jpg","93de37b1c287aa6e396629651b87c759"],["/img/kcp.png","2fcc970d8d88c663de4f32096f10c4e5"],["/img/lifecycle.png","2fe88acda884a35cd150475b24d4d87d"],["/img/linux.jpg","da86200d0441f2434e074909fb78a750"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/micro-task.png","24b1f7b7c18318952099be9126d6f719"],["/img/micro.png","ef9842e97a62bb5c2aac3cbf99b2b7de"],["/img/middleware.jpg","e1c6e4c7df95a5e3a80882c8b4aaf803"],["/img/mvc1.png","6fea96842165b35cd4362afbfe4c28ac"],["/img/mvc2.png","0967d7c996185643a5c3c221f23976b1"],["/img/mvc3.png","24c741b64ad540f9ea3b6728007627f0"],["/img/mvc4.png","47e923a5451f384f54fb8f8e5d119ea7"],["/img/mvc5.png","59e3024de383a663c185cb6f51e3c194"],["/img/net0.png","67709cff0f5b734941fa8984380b456f"],["/img/network.jpg","6d1bd3867a00092a15e810f0e28e08f7"],["/img/node.jpg","5a1d0be501a67bbb11f76193b2484932"],["/img/nuxt1.png","a8a79e895887d6cc0dbac0e10817d3f8"],["/img/nuxt2.png","794d74b38ae7072cb13efec3f54c6d46"],["/img/nuxt3.png","30153f3e8ff30b283ef0c85aebd30145"],["/img/nuxt4.png","2d6d081ce9fc5d73dfa2104dd4f62662"],["/img/nuxt5.png","1965e4a8214d1dd5acc4fdc99a0c135d"],["/img/osi.gif","2af488004591cbc12cd82c44518523de"],["/img/piano.png","3e50520a46b2a5ef5e5bcfecf89ebe7c"],["/img/proxy.webp","b71c84b0dd3183787b9b7390d9cc3626"],["/img/python.jpg","0ea8225aa53fd9b90afa175f2f029b1e"],["/img/react.webp","138a4a86046047def99fde8a939e238a"],["/img/render.png","5527a6ebe35dd531060b80296da055bc"],["/img/render1.png","79d4f1ecf7669ed50e0373945a2248aa"],["/img/sql_index.jpg","01266f5a5746ccca7602549b7e6cb846"],["/img/sql_no_index.jpg","898f9995d5536159509c6346b34593f0"],["/img/sql_s1.jpg","b852c3e340f80f79a149bcc4fffd158c"],["/img/sql_s2.jpg","24f9c84401a165b6cbe3304e42c50889"],["/img/sql_s3.jpg","95628c777213e9fc89c954ce3d3cb684"],["/img/sql_save.jpg","da4eb76556990a3b9b89e32e48136660"],["/img/ssr.png","5631c8e2f956ae0d55455d04af8ab317"],["/img/tcp-ip.jpg","c1a9182811eca72933a8c0ffd39eba06"],["/img/tcp.png","6a28f4d806c4ce9e148c28132f0e126c"],["/img/tcp3.png","83d97bc275b4af9890b2deeb7d035a9a"],["/img/tcp4.png","78aea88d303d52d5dbc81e002fd93d2a"],["/img/teach.jpg","4650698f3262b8c395cc3b640b568045"],["/img/vi-cmd.gif","acc327dfe0d5328c1ad102179c70b641"],["/img/vim-vi.png","dcd25a6082e1989975c280213f3e1052"],["/img/vue-nexttick.png","f1f3435bb2f4d3f418480be4a171e0ed"],["/img/vue-nexttick2.png","ed23a41f9c38de8174b1089ab3876966"],["/img/vue1.png","cacdab3440e3647647063f253a99fb07"],["/img/vue2.png","51175931269b1b90b2f08aabeb14fc96"],["/img/vue3.png","904b88eac7e8b99e3b6063a5977fc63e"],["/img/webhook.png","2cf55702ae98e72420c445084e5c2405"],["/img/ws.webp","aa574f8edcccc79f33aea448ea322d57"],["/img/xss.png","5c18b7d26b37df483a702810498d3182"],["/index.html","68f667d8c818017e5c4d40258e8fcfda"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","59b27a7adad04024b9b7eb96d3254280"],["/page/2/index.html","3459a8ed534c8bcdaec625f81691b019"],["/page/3/index.html","b16821c2db1c63eef239d4cef66657aa"],["/page/4/index.html","2946acd07f52e584bf81eb3b953f7a41"],["/page/5/index.html","32ac7899935810869f27f9aad8c832c1"],["/page/6/index.html","1f31ab7df74193f663f1a94fce9e433f"],["/piano/index.html","5f1e9d4abbe2c68a5dcf8b2367d79f2d"],["/piano/piano.js","b3b64af667370ff6a52ea668c545facf"],["/pwa/144.png","68bbcf438443c0540757bf8c269507ec"],["/pwa/192.png","303f826bc53ca35a6db0f2a4d243d837"],["/pwa/48.png","07688b011d5f26cee21398d85ac2e0a4"],["/pwa/512.png","8fddc19901d448a5317575adcad7d1ac"],["/pwa/96.png","ce8ea5361607aa60dab17e1a50d4570a"],["/pwa/favicon.png","3d4e693505092fc6f4cc1a70438ef843"],["/qrcode/brcode.js","e1060ec8ce3a96679db85152a175f233"],["/qrcode/index.html","4460bb9e891efc17079775bcde87d240"],["/static/ashes.js","b4143c2bd85f1c81cbfda93f2dc76988"],["/static/bg.png","c62e2e026531003de922e4e5d6ff541a"],["/static/editor.js","ce1fb5f6b8e638fe05a28941f9970b92"],["/static/follow.js","3daa711f3e14bd15d8b1f64313b685ee"],["/static/weplayer.js","5b13e6501c44801cb201ec9d6e1ef746"],["/tags/Javascript/index.html","8bf4295dcdbb62c55cdc2928f2887f81"],["/tags/Javascript/page/2/index.html","bed50460b112a654cd89a1346582e442"],["/tags/Javascript/page/3/index.html","592cac4deb4c177a4b74215dd72e1f2c"],["/tags/Mongodb/index.html","c1c41741cc8a36eb57c16363514dae24"],["/tags/brower/index.html","b409f0c5e6369bc19d1ba337bfb74e97"],["/tags/brower/page/2/index.html","d39ddc352b12842f6182b152b7de29be"],["/tags/centos/index.html","2609e9d9c30c390f44ab908cbb76ae7a"],["/tags/cmd/index.html","aa08b8efa4a863397b06b0858a6770ed"],["/tags/cors/index.html","a0b0e7dd797436aeb6e59e6394e6ab30"],["/tags/css/index.html","efd6358a73c4da8911caa8d622fe58fd"],["/tags/django/index.html","41a75e17c4f76e6539b4a8e0865febf7"],["/tags/err/index.html","17c445aaee368af288b24146905f81f4"],["/tags/es6/index.html","fbf451cf661dd10c8e57d580e6801009"],["/tags/es6/page/2/index.html","53f3cdf09b9cdef66801d985869634b8"],["/tags/git/index.html","cdc39ac10155e2d049a1967c93e92a52"],["/tags/github/index.html","1b93aab7f684c914ec2a5acb2302ca76"],["/tags/html/index.html","97d7c15996f83daa9a312ca6868a0a8a"],["/tags/http/index.html","5ac335917505dd436f50faf6556b65d1"],["/tags/hy/index.html","c242f7fea887517b0ba6b36b18e1b71e"],["/tags/index.html","ae1adaf472e1bda81a7cd2aae7871717"],["/tags/java/index.html","73cc4e647ff206a224de4d74ba2357f5"],["/tags/jdk/index.html","9335d4bae7fc9ce4ef5b5db57b5fb431"],["/tags/jwt/index.html","b56cc424d8cf9298c24d48577d719583"],["/tags/lifecycle/index.html","4727eed14efb704c4eb1bdb3959a8af6"],["/tags/mobile/index.html","c70f47fcd1b1c26f48e4f31667e0da0d"],["/tags/model/index.html","079c2b830bd08f5973823ef026b7978e"],["/tags/mse/index.html","e8fd1e2c78246f93cd0efe0a5405d46a"],["/tags/mysql/index.html","363c1be3edf7a7fc86fb6050f64e8f6e"],["/tags/network/index.html","92c533053c6f23ec7d18fac8c1718c48"],["/tags/nginx/index.html","0aeecec5fd92eed577ecf16a400f22c7"],["/tags/node/index.html","3b65310120d24e32494f5ee558b8630b"],["/tags/npm/index.html","0bd22f3eaadfe9b941854defd4c07afc"],["/tags/nuxt/index.html","7a1e28d2568f132df041397cccd90a8e"],["/tags/proxy/index.html","6cbece236e325526de7d8e45091e4a32"],["/tags/schedule/index.html","b8d76a326661111a3d8ad537b8d61670"],["/tags/tcp/index.html","d6d441376c88990987eef7988ab1db15"],["/tags/typescript/index.html","c71788c0ac63a77fe28124dcc44641b8"],["/tags/video/index.html","3716a065045dd5489910b3af88de2bbb"],["/tags/vue/index.html","3fbc946e3fe5ee57fc6315ea5d08bfb6"],["/tags/webpack/index.html","994c26198b34c30b54205a01aedecaa3"],["/tags/ws/index.html","057fc353fef3ab03a6ea3c8bae748776"],["/tags/xhr/index.html","dba737cba0d85852e41a5e705eeefeed"],["/video/index.html","17660a06f54cd228bc78a86a35bdd968"],["/video/player.js","939f5190e9b3ffcced53f07053df4eff"],["/web_page/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/web_page/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/web_page/knav.js","7d863b99144e1651521d6bbc48b7f1b8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.webq.top"});




