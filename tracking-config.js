(function (w) {
    w.vtg = w.vtg || {};

    vtg.config = {
        "Settings": {
            "debug": true,
            "ssl": true
        },
        "Adobe": {
            "enabled": true,
            "params": {
                "serverInfo": {
                    "prodUrl": "networkten.sc.omtrdc.net",
                    "devUrl": "networkten.sc.omtrdc.net",
                    "prodSuite": "nwtplay,nwtglobal",
                    "devSuite": "nwtplaydev,nwtglobaldev",
                    "demdexUrl": "dpm.demdex.net/id?d_rtbd=json&d_ver=2&d_orgid=",
                    "id3Owner": "com.cbsi.live.sg"
                },
                "appTrackingInfo" : {
                    "reportSuiteID": "{config.reportSuite}",
                    "marketingCloudOrgId": "10D31225525FF5790A490D4D@AdobeOrg",
                    "marketingCloudVisitorID": "{config.mid}",
                    "dataUrl": "som.cbsi.com/b/ss/{config.reportSuite}/6"
                },
                "accountInfo": {
                    "analytics.trackingServer": "saa.cbsi.com",
                    "analytics.reportSuite": "{config.reportSuite}",
                    "analytics.enableSSL": "true",
                    "visitor.marketingCloudOrgId": "10D31225525FF5790A490D4D@AdobeOrg",
                    "visitor.marketingCloudUserId": "{config.mid}"
                },
                "mediaInfo": {
                    "media.playerName": "{data.playerName}",
                    "media.contentType": "{data.isLive} ? Live : VOD",
                    "media.length": "{data.isLive} ? 86400 : {data.duration}",
                    "media.id": "{data.mediaId}",
                    "media.name": "{data.videoTitle}",
                    "media.channel": "CBS All Access",
                    "media.network": "CBS All Access",
                    "media.sdkVersion": "{data.playerVersion}",
                    "media.show": "{data.seriesTitle}",
                    "media.genre": "{data.category}",
                    "media.season": "{data.seasonNumber}",
                    "media.episode": "{data.episodeNumber}",
                    "media.showType": "{data.isEpisode} ? 0 : 2",
                    "media.resume": "{data.hasSessionResumed}"
                },
                "liveSegmentInfo": {
                    "media.id": "{data.segmentId}",
                    "media.name": "{data.segmentTitle}",
                    "media.channel": "{data.segmentEdition}"
                },
                "adBreakInfo": {
                    "media.ad.podFriendlyName": "{data.adBreakType}",
                    "media.ad.podIndex": "{data.adBreakPosition}",
                    "media.ad.podSecond": "{data.playhead}"
                },
                "adInfo": {
                    "media.ad.name": "{data.adTitle}",
                    "media.ad.id": "{data.videoTitle} - {data.adTitle}",
                    "media.ad.length": "{data.adDuration}",
                    "media.ad.creativeId": "{data.adId}",
                    "media.ad.creativeURL": "{data.adUrl}",
                    "media.ad.playerName": "{data.playerName}",
                    "media.ad.podPosition": "{data.adPosition}"
                },
                "customData": {
                    "mediaResume": "{data.hasSessionResumed}"
                },
                "qoeData": {
                    "media.qoe.timeToStart": "{data.timeToStart}"
                },
                "dataType": {
                    "analytics.enableSSL": "boolean",
                    "media.length": "int",
                    "media.resume": "boolean",
                    "media.ad.podIndex": "int",
                    "media.ad.podSecond": "int",
                    "media.ad.length": "int",
                    "media.ad.podPosition": "int",
                    "media.qoe.timeToStart": "int"
                }
            }
        },
        "NielsenDCR": {
            "enabled": true,
            "params": {
                "serverInfo": {
                    "appId": "P1B2C58FF-9697-4469-A6A5-C5B3681719BA",
                    "nol_sdkDebug": "{config.debug} ? DEBUG : NONE",
                    "optout": "false"
                },
                "mediaInfo": {
                    "assetid": "{data.mediaId}",
                    "program": "{data.videoTitle}",
                    "title": "{data.episodeTitle} || {data.videoTitle}",
                    "type": "content",
                    "length": "{data.isLive} ? 0 : {data.duration}",
                    "mediaURL": "{data.mediaUrl}",
                    "isfullepisode": "{data.isEpisode} ? y : n",
                    "adloadtype": "{data.isDai} ? 2 : 1"
                },
                "adInfo": {
                    "assetid": "{data.adId}",
                    "type": "{data.adBreakType}"
                }
            }
        },
        "OzTam": {
            "enabled": true,
            "params": {
                "serverInfo": {
                    "liveKey": "4586f4a7-a22e-4f98-a7b5-31b621a927a5",
                    "vodKey": "779e3a9f-0ad4-4288-ae57-b4fba8259c1f",
                    "platform": "TenAllAccess",
                    "productionMode": true,
                    "useHTTPS": true
                },
                "mediaInfo": {
                    "mediaId": "{data.ozTamMediaId} || {data.mediaId}",
                    "url": "{data.mediaUrl}",
                    "mediaDuration": "{data.duration}",
                    "mediaType": "{data.isLive} ? live : vod"
                }
            }
        }
    };

})(window);
