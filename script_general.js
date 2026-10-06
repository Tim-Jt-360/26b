(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"history":{},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1},"name":"Player6429","displayTooltipInTouchScreens":true,"defaultLocale":"es"},"hash": "2ef736b4d18f855459cc88e7c040df40dd05470e847894183ab74b5566e511e8", "definitions": [{"id":"mainPlayList","items":[{"camera":"this.panorama_1E15CE27_109B_49B1_4183_69444EB118D1_camera","media":"this.panorama_1E15CE27_109B_49B1_4183_69444EB118D1","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"hfov":360,"thumbnailUrl":"media/panorama_1E15CE27_109B_49B1_4183_69444EB118D1_t.webp","frames":[{"thumbnailUrl":"media/panorama_1E15CE27_109B_49B1_4183_69444EB118D1_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4096,"url":"media/panorama_1E15CE27_109B_49B1_4183_69444EB118D1_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":8,"colCount":48,"width":24576,"tags":"ondemand"},{"height":2048,"url":"media/panorama_1E15CE27_109B_49B1_4183_69444EB118D1_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":4,"colCount":24,"width":12288,"tags":"ondemand"},{"height":1024,"url":"media/panorama_1E15CE27_109B_49B1_4183_69444EB118D1_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"width":6144,"tags":"ondemand"},{"height":512,"url":"media/panorama_1E15CE27_109B_49B1_4183_69444EB118D1_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"width":3072,"tags":["ondemand","preload"]}]}}],"vfov":180,"hfovMax":130,"data":{"label":"Sch\u00fcepwis 26b"},"class":"Panorama","label":trans('panorama_1E15CE27_109B_49B1_4183_69444EB118D1.label'),"id":"panorama_1E15CE27_109B_49B1_4183_69444EB118D1"},{"playbackBarHeadShadowVerticalLength":0,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarRight":0,"playbackBarHeadShadowHorizontalLength":0,"progressBorderSize":0,"playbackBarProgressBorderRadius":0,"progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"surfaceReticleColor":"#FFFFFF","progressBorderRadius":2,"data":{"name":"Main Viewer"},"propagateClick":false,"toolTipBorderColor":"#767676","progressLeft":"33%","subtitlesTextShadowVerticalLength":1,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"toolTipFontSize":"1.11vmin","playbackBarBottom":5,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"toolTipPaddingBottom":4,"toolTipPaddingRight":6,"playbackBarHeadBorderColor":"#000000","vrPointerSelectionTime":2000,"subtitlesGap":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipShadowColor":"#333138","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadHeight":15,"id":"MainViewer","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","toolTipFontFamily":"Arial","playbackBarLeft":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderColor":"#000000","playbackBarBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"class":"ViewerArea","vrThumbstickRotationStep":20,"subtitlesFontSize":"3vmin","progressRight":"33%","vrPointerColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","toolTipBackgroundColor":"#F6F6F6","minHeight":50,"subtitlesBottom":50,"minWidth":100,"progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"progressBarBorderColor":"#000000","toolTipPaddingLeft":6,"height":"100%","toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"width":"100%","toolTipFontColor":"#606060","progressBackgroundColor":["#000000"],"progressBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"progressBottom":10},{"keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","class":"PanoramaPlayer","aaEnabled":true,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation"},{"enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","initialSequence":"this.sequence_1E90AAC3_109B_4EF2_41A7_AFFABC109FBE","id":"panorama_1E15CE27_109B_49B1_4183_69444EB118D1_camera"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_1E90AAC3_109B_4EF2_41A7_AFFABC109FBE"}],"backgroundColor":["#FFFFFF"],"start":"this.init()","layout":"absolute","scrollBarMargin":2,"propagateClick":false,"xrPanelsEnabled":true,"class":"Player","minHeight":0,"minWidth":0,"watermark":false,"backgroundColorRatios":[0],"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scrollBarColor":"#000000","scripts":{"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"setLocale":TDV.Tour.Script.setLocale,"cloneBindings":TDV.Tour.Script.cloneBindings,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"openLink":TDV.Tour.Script.openLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"clone":TDV.Tour.Script.clone,"setValue":TDV.Tour.Script.setValue,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"initQuiz":TDV.Tour.Script.initQuiz,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPixels":TDV.Tour.Script.getPixels,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getKey":TDV.Tour.Script.getKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"init":TDV.Tour.Script.init,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"historyGoForward":TDV.Tour.Script.historyGoForward,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"startMeasurement":TDV.Tour.Script.startMeasurement,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"existsKey":TDV.Tour.Script.existsKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playAudioList":TDV.Tour.Script.playAudioList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"showWindowBase":TDV.Tour.Script.showWindowBase,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"registerKey":TDV.Tour.Script.registerKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizStart":TDV.Tour.Script.quizStart,"getComponentByName":TDV.Tour.Script.getComponentByName,"downloadFile":TDV.Tour.Script.downloadFile,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"createTween":TDV.Tour.Script.createTween,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"toggleVR":TDV.Tour.Script.toggleVR,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"disableVR":TDV.Tour.Script.disableVR,"getOverlays":TDV.Tour.Script.getOverlays,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"enableVR":TDV.Tour.Script.enableVR,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"shareSocial":TDV.Tour.Script.shareSocial,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"translate":TDV.Tour.Script.translate,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizFinish":TDV.Tour.Script.quizFinish,"unloadViewer":TDV.Tour.Script.unloadViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay},"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Tue Oct 6 2026