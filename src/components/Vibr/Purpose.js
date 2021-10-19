import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const Purpose=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Appointment":lang==="ru"?"Назначение":"Təyinat";
    let adres=lang==="en"?"/info/vibration":lang==="ru"?"/info/vibraciya":"/info/vibrasiya";
    let info2=lang==="en"?"IV-500 engine vibration control system":lang==="ru"?"Система контроля вибрации двигателя ИВ-500":"ИВ-500 mühərrikin titrəmə nəzarəti sistemi";
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
                <iframe width="70%" height="100%" src="https://www.youtube.com/embed/Z7nwU6_hKSI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
}
export default Purpose;