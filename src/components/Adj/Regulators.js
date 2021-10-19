import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const Regulators=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Joint work of regulators":lang==="ru"?"Совместная работа регуляторов":"Tənzimləyicilərin birgə işi";
    let adres=lang==="en"?"/info/fuelfeedingandadjustment":lang==="ru"?"/info/podacatoplivaiupravleniye":"/info/yanacaglaqidalanmavetenzimlenme";
    let info2=lang==="en"?"TV3-117ВМ engine fuel supply and control system":lang==="ru"?"Система подачи топлива и управления двигателем ТВ3-117ВМ":"ТВ3-117ВМ müherrikin yanacağla qidalanma və tənzimlənmə sistemi";
    let info1=lang==="en"?"TB3-117BM Engine Subtopics":lang==="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
    let home=lang==="en"?"Home":lang==="ru"?"Главная":"Ana səhifə";
        return (
            <div>
                <Breadcrumb title={title}>
                    <BreadcrumbItem name={home} href="/" />
                    <BreadcrumbItem name={info1} href="/info" />
                    <BreadcrumbItem name={info2} href={adres} />
                    <BreadcrumbItem name={title} current />
                </Breadcrumb>
                <div className="forVideo" style={{textAlign:"center",width:"100%",height:"75vh",marginBottom:"10px"}}>
                <iframe width="70%" height="100%" src="https://www.youtube.com/embed/MaESGiaELgI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
}
export default Regulators; 