var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SUNGAIII_1 = new ol.format.GeoJSON();
var features_SUNGAIII_1 = format_SUNGAIII_1.readFeatures(json_SUNGAIII_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIII_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIII_1.addFeatures(features_SUNGAIII_1);
var lyr_SUNGAIII_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAIII_1, 
                style: style_SUNGAIII_1,
                interactive: true,
                title: '<img src="styles/legend/SUNGAIII_1.png" /> SUNGAIII'
            });
var format_SAMARINDA_SEBRANG_2 = new ol.format.GeoJSON();
var features_SAMARINDA_SEBRANG_2 = format_SAMARINDA_SEBRANG_2.readFeatures(json_SAMARINDA_SEBRANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAMARINDA_SEBRANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAMARINDA_SEBRANG_2.addFeatures(features_SAMARINDA_SEBRANG_2);
var lyr_SAMARINDA_SEBRANG_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAMARINDA_SEBRANG_2, 
                style: style_SAMARINDA_SEBRANG_2,
                interactive: true,
                title: '<img src="styles/legend/SAMARINDA_SEBRANG_2.png" /> SAMARINDA_SEBRANG'
            });
var format_PEMUKIMAN_3 = new ol.format.GeoJSON();
var features_PEMUKIMAN_3 = format_PEMUKIMAN_3.readFeatures(json_PEMUKIMAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_3.addFeatures(features_PEMUKIMAN_3);
var lyr_PEMUKIMAN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_3, 
                style: style_PEMUKIMAN_3,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_3.png" /> PEMUKIMAN'
            });
var format_NONAGRISEMAKBELUKAR_4 = new ol.format.GeoJSON();
var features_NONAGRISEMAKBELUKAR_4 = format_NONAGRISEMAKBELUKAR_4.readFeatures(json_NONAGRISEMAKBELUKAR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRISEMAKBELUKAR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRISEMAKBELUKAR_4.addFeatures(features_NONAGRISEMAKBELUKAR_4);
var lyr_NONAGRISEMAKBELUKAR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NONAGRISEMAKBELUKAR_4, 
                style: style_NONAGRISEMAKBELUKAR_4,
                interactive: true,
                title: '<img src="styles/legend/NONAGRISEMAKBELUKAR_4.png" /> NONAGRISEMAKBELUKAR'
            });
var format_NONAGRIALANG_5 = new ol.format.GeoJSON();
var features_NONAGRIALANG_5 = format_NONAGRIALANG_5.readFeatures(json_NONAGRIALANG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRIALANG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIALANG_5.addFeatures(features_NONAGRIALANG_5);
var lyr_NONAGRIALANG_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NONAGRIALANG_5, 
                style: style_NONAGRIALANG_5,
                interactive: true,
                title: '<img src="styles/legend/NONAGRIALANG_5.png" /> NONAGRIALANG'
            });
var format_DANAU_6 = new ol.format.GeoJSON();
var features_DANAU_6 = format_DANAU_6.readFeatures(json_DANAU_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_6.addFeatures(features_DANAU_6);
var lyr_DANAU_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_6, 
                style: style_DANAU_6,
                interactive: true,
                title: '<img src="styles/legend/DANAU_6.png" /> DANAU'
            });
var format_AGRIKEBUN_7 = new ol.format.GeoJSON();
var features_AGRIKEBUN_7 = format_AGRIKEBUN_7.readFeatures(json_AGRIKEBUN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_7.addFeatures(features_AGRIKEBUN_7);
var lyr_AGRIKEBUN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRIKEBUN_7, 
                style: style_AGRIKEBUN_7,
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_7.png" /> AGRIKEBUN'
            });
var format_SUNGAI_8 = new ol.format.GeoJSON();
var features_SUNGAI_8 = format_SUNGAI_8.readFeatures(json_SUNGAI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_8.addFeatures(features_SUNGAI_8);
var lyr_SUNGAI_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_8, 
                style: style_SUNGAI_8,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_8.png" /> SUNGAI'
            });
var format_KONTUR_9 = new ol.format.GeoJSON();
var features_KONTUR_9 = format_KONTUR_9.readFeatures(json_KONTUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONTUR_9.addFeatures(features_KONTUR_9);
var lyr_KONTUR_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KONTUR_9, 
                style: style_KONTUR_9,
                interactive: true,
                title: '<img src="styles/legend/KONTUR_9.png" /> KONTUR'
            });
var format_JEMBATAN_10 = new ol.format.GeoJSON();
var features_JEMBATAN_10 = format_JEMBATAN_10.readFeatures(json_JEMBATAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_10.addFeatures(features_JEMBATAN_10);
var lyr_JEMBATAN_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JEMBATAN_10, 
                style: style_JEMBATAN_10,
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_10.png" /> JEMBATAN'
            });
var format_JALAN_11 = new ol.format.GeoJSON();
var features_JALAN_11 = format_JALAN_11.readFeatures(json_JALAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_11.addFeatures(features_JALAN_11);
var lyr_JALAN_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_11, 
                style: style_JALAN_11,
                interactive: true,
                title: '<img src="styles/legend/JALAN_11.png" /> JALAN'
            });
var format_TOPOMINI_12 = new ol.format.GeoJSON();
var features_TOPOMINI_12 = format_TOPOMINI_12.readFeatures(json_TOPOMINI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPOMINI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPOMINI_12.addFeatures(features_TOPOMINI_12);
var lyr_TOPOMINI_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOPOMINI_12, 
                style: style_TOPOMINI_12,
                interactive: true,
                title: '<img src="styles/legend/TOPOMINI_12.png" /> TOPOMINI'
            });
var format_SPOTHEIGHT_13 = new ol.format.GeoJSON();
var features_SPOTHEIGHT_13 = format_SPOTHEIGHT_13.readFeatures(json_SPOTHEIGHT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPOTHEIGHT_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPOTHEIGHT_13.addFeatures(features_SPOTHEIGHT_13);
var lyr_SPOTHEIGHT_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPOTHEIGHT_13, 
                style: style_SPOTHEIGHT_13,
                interactive: true,
                title: '<img src="styles/legend/SPOTHEIGHT_13.png" /> SPOTHEIGHT'
            });
var format_SARANA_IBADAH_14 = new ol.format.GeoJSON();
var features_SARANA_IBADAH_14 = format_SARANA_IBADAH_14.readFeatures(json_SARANA_IBADAH_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANA_IBADAH_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANA_IBADAH_14.addFeatures(features_SARANA_IBADAH_14);
var lyr_SARANA_IBADAH_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SARANA_IBADAH_14, 
                style: style_SARANA_IBADAH_14,
                interactive: true,
                title: '<img src="styles/legend/SARANA_IBADAH_14.png" /> SARANA_IBADAH'
            });
var format_PUSKESMAS_15 = new ol.format.GeoJSON();
var features_PUSKESMAS_15 = format_PUSKESMAS_15.readFeatures(json_PUSKESMAS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_15.addFeatures(features_PUSKESMAS_15);
var lyr_PUSKESMAS_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PUSKESMAS_15, 
                style: style_PUSKESMAS_15,
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_15.png" /> PUSKESMAS'
            });
var format_PENDIDIKAN_16 = new ol.format.GeoJSON();
var features_PENDIDIKAN_16 = format_PENDIDIKAN_16.readFeatures(json_PENDIDIKAN_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_16.addFeatures(features_PENDIDIKAN_16);
var lyr_PENDIDIKAN_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_16, 
                style: style_PENDIDIKAN_16,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_16.png" /> PENDIDIKAN'
            });
var format_PEMERINTAHAN_17 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_17 = format_PEMERINTAHAN_17.readFeatures(json_PEMERINTAHAN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_17.addFeatures(features_PEMERINTAHAN_17);
var lyr_PEMERINTAHAN_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_17, 
                style: style_PEMERINTAHAN_17,
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_17.png" /> PEMERINTAHAN'
            });
var format_NIAGA_18 = new ol.format.GeoJSON();
var features_NIAGA_18 = format_NIAGA_18.readFeatures(json_NIAGA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIAGA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIAGA_18.addFeatures(features_NIAGA_18);
var lyr_NIAGA_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NIAGA_18, 
                style: style_NIAGA_18,
                interactive: true,
                title: '<img src="styles/legend/NIAGA_18.png" /> NIAGA'
            });
var format_KANTOR_POS_19 = new ol.format.GeoJSON();
var features_KANTOR_POS_19 = format_KANTOR_POS_19.readFeatures(json_KANTOR_POS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTOR_POS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTOR_POS_19.addFeatures(features_KANTOR_POS_19);
var lyr_KANTOR_POS_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KANTOR_POS_19, 
                style: style_KANTOR_POS_19,
                interactive: true,
                title: '<img src="styles/legend/KANTOR_POS_19.png" /> KANTOR_POS'
            });
var format_KANTOR_AIR_MINUM_20 = new ol.format.GeoJSON();
var features_KANTOR_AIR_MINUM_20 = format_KANTOR_AIR_MINUM_20.readFeatures(json_KANTOR_AIR_MINUM_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTOR_AIR_MINUM_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTOR_AIR_MINUM_20.addFeatures(features_KANTOR_AIR_MINUM_20);
var lyr_KANTOR_AIR_MINUM_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KANTOR_AIR_MINUM_20, 
                style: style_KANTOR_AIR_MINUM_20,
                interactive: true,
                title: '<img src="styles/legend/KANTOR_AIR_MINUM_20.png" /> KANTOR_AIR_MINUM'
            });
var format_BANGUNAN_21 = new ol.format.GeoJSON();
var features_BANGUNAN_21 = format_BANGUNAN_21.readFeatures(json_BANGUNAN_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_21.addFeatures(features_BANGUNAN_21);
var lyr_BANGUNAN_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_21, 
                style: style_BANGUNAN_21,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_21.png" /> BANGUNAN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SUNGAIII_1.setVisible(true);lyr_SAMARINDA_SEBRANG_2.setVisible(true);lyr_PEMUKIMAN_3.setVisible(true);lyr_NONAGRISEMAKBELUKAR_4.setVisible(true);lyr_NONAGRIALANG_5.setVisible(true);lyr_DANAU_6.setVisible(true);lyr_AGRIKEBUN_7.setVisible(true);lyr_SUNGAI_8.setVisible(true);lyr_KONTUR_9.setVisible(true);lyr_JEMBATAN_10.setVisible(true);lyr_JALAN_11.setVisible(true);lyr_TOPOMINI_12.setVisible(true);lyr_SPOTHEIGHT_13.setVisible(true);lyr_SARANA_IBADAH_14.setVisible(true);lyr_PUSKESMAS_15.setVisible(true);lyr_PENDIDIKAN_16.setVisible(true);lyr_PEMERINTAHAN_17.setVisible(true);lyr_NIAGA_18.setVisible(true);lyr_KANTOR_POS_19.setVisible(true);lyr_KANTOR_AIR_MINUM_20.setVisible(true);lyr_BANGUNAN_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SUNGAIII_1,lyr_SAMARINDA_SEBRANG_2,lyr_PEMUKIMAN_3,lyr_NONAGRISEMAKBELUKAR_4,lyr_NONAGRIALANG_5,lyr_DANAU_6,lyr_AGRIKEBUN_7,lyr_SUNGAI_8,lyr_KONTUR_9,lyr_JEMBATAN_10,lyr_JALAN_11,lyr_TOPOMINI_12,lyr_SPOTHEIGHT_13,lyr_SARANA_IBADAH_14,lyr_PUSKESMAS_15,lyr_PENDIDIKAN_16,lyr_PEMERINTAHAN_17,lyr_NIAGA_18,lyr_KANTOR_POS_19,lyr_KANTOR_AIR_MINUM_20,lyr_BANGUNAN_21];
lyr_SUNGAIII_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SAMARINDA_SEBRANG_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'LUAS': 'LUAS', });
lyr_PEMUKIMAN_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRISEMAKBELUKAR_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRIALANG_5.set('fieldAliases', {'AQDATE': 'AQDATE', 'FCODE': 'FCODE', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'NAMOBJ': 'NAMOBJ', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSPDG': 'JNSPDG', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KONTUR_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'VALKNT': 'VALKNT', 'TIPKNT': 'TIPKNT', 'IDXKNT': 'IDXKNT', 'FCODE': 'FCODE', 'JNSKNT': 'JNSKNT', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JEMBATAN_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TOPOMINI_12.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_SPOTHEIGHT_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SARANA_IBADAH_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PUSKESMAS_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_PENDIDIKAN_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PEMERINTAHAN_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_NIAGA_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_KANTOR_POS_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTOR_AIR_MINUM_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BANGUNAN_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAIII_1.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SAMARINDA_SEBRANG_2.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'LUAS': '', });
lyr_PEMUKIMAN_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRISEMAKBELUKAR_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_NONAGRIALANG_5.set('fieldImages', {'AQDATE': '', 'FCODE': '', 'KLSRMP': '', 'KODATC': '', 'NAMOBJ': '', 'PUDATE': '', 'REMARK': '', 'SRS_ID': '', 'JNSPDG': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_DANAU_6.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRIKEBUN_7.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_8.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_KONTUR_9.set('fieldImages', {'NAMOBJ': '', 'VALKNT': '', 'TIPKNT': '', 'IDXKNT': '', 'FCODE': '', 'JNSKNT': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_JEMBATAN_10.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'JBTJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_JALAN_11.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_TOPOMINI_12.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'ALIAS': '', 'LOKTPN': '', 'REMARK': '', 'KLSTPN': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FTYPE': '', 'LAT': '', 'LON': '', 'KOORDY': '', 'KOORDX': '', 'KOORDINAT1': '', 'KORDINTAT2': '', 'LUAS': '', 'Elevasi': '', 'NAMLOK': '', 'NAMSPE': '', 'NAMMAP': '', 'NAMGAZ': '', 'SJHNAM': '', 'ARTINAM': '', 'ASLBHS': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'STATUS': '', });
lyr_SPOTHEIGHT_13.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ELEVAS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SARANA_IBADAH_14.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PUSKESMAS_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_PENDIDIKAN_16.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_PEMERINTAHAN_17.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_NIAGA_18.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FUNGSI': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FGSKOD': '', 'JNSPSR': '', 'JNSTKO': '', 'JNSKTR': '', 'PRSTRP': '', });
lyr_KANTOR_POS_19.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNKPOS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KANTOR_AIR_MINUM_20.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_BANGUNAN_21.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SUNGAIII_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SAMARINDA_SEBRANG_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'LUAS': 'no label', });
lyr_PEMUKIMAN_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRISEMAKBELUKAR_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRIALANG_5.set('fieldLabels', {'AQDATE': 'no label', 'FCODE': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'NAMOBJ': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSPDG': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_6.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_8.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KONTUR_9.set('fieldLabels', {'NAMOBJ': 'no label', 'VALKNT': 'no label', 'TIPKNT': 'no label', 'IDXKNT': 'no label', 'FCODE': 'no label', 'JNSKNT': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JEMBATAN_10.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_11.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TOPOMINI_12.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_SPOTHEIGHT_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SARANA_IBADAH_14.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PUSKESMAS_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_PENDIDIKAN_16.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_PEMERINTAHAN_17.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_NIAGA_18.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_KANTOR_POS_19.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNKPOS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTOR_AIR_MINUM_20.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_BANGUNAN_21.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_BANGUNAN_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});