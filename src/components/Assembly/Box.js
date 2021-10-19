import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const Box=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Transmission box":lang==="ru"?"Коробка приводов":"İntiqal qutusu";
    let adres=lang==="en"?"/info/assembly":lang==="ru"?"/info/ustanovkaosnovnixcastey":"/info/esashisselerinqurgusu";
    let info2=lang==="en"?"Installation of main parts of TV3-117ВМ engine":lang==="ru"?"Установка основных частей двигателя ТВ3-117ВМ":"ТВ3-117ВМ müherrikin əsas hissələrin qurğusu";
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
                <iframe width="70%" height="100%" src="https://www.youtube.com/embed/LCjTBZvuyto" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
}
export default Box;