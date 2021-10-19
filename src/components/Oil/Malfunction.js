import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const Malfunction=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Possible system failures":lang==="ru"?"Возможные системные сбои":"Sistemin mümkün nasazlıqları";
    let adres=lang==="en"?"/info/oil":lang==="ru"?"/info/maslo":"/info/yaglama";
    let info2=lang==="en"?"TV3-117ВМ engine oil system":lang==="ru"?"Масляная система двигателя ТВ3-117ВМ":"ТВ3-117ВМ müherrikin yağ sistemi";
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
                <iframe width="70%" height="100%" src="https://www.youtube.com/embed/ZEeMwiVWiog" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
}
export default Malfunction;