import React, { Component } from 'react'

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

import { useTranslation } from 'react-i18next';

const Appointment=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang==="en"?"Purpose and basic information":lang==="ru"?"Назначение и основная информация":"Təyinat və əsas məlumatlar";
    let info2=lang==="en"?"Dust protection device (DPS)":lang==="ru"?"Устройство защиты от пыли (ПЗУ)":"Tozqoruyucu qurğu(ПЗУ)";
    let info1=lang==="en"?"TB3-117BM Engine Subtopics":lang==="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
    let home=lang==="en"?"Home":lang==="ru"?"Главная":"Ana səhifə";
        return (
            <div>
                <Breadcrumb title={title}>
                    <BreadcrumbItem name={home} href="/" />
                    <BreadcrumbItem name={info1} href="/info" />
                    <BreadcrumbItem name={info2} href="/info/pzu" />
                    <BreadcrumbItem name={title} current />
                </Breadcrumb>
                <div className="forVideo" style={{textAlign:"center",width:"100%",height:"75vh",marginBottom:"10px"}}>
                <iframe width="70%" height="100%" src="https://www.youtube.com/embed/iUt1AGKsFTc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
}
export default Appointment;