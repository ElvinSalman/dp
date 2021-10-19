import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import infoAssem from "../../data/assembly.json";

import { useTranslation } from 'react-i18next';

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

const Assembly=()=> {
    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang=="en"?"Installation of main parts of TV3-117ВМ engine":lang=="ru"?"Установка основных частей двигателя ТВ3-117ВМ":"ТВ3-117ВМ müherrikin əsas hissələrin qurğusu";
    let info=lang=="en"?"TB3-117BM Engine Subtopics":lang=="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
    let home=lang=="en"?"Home":lang=="ru"?"Главная":"Ana səhifə";
        return (
            <>
            <Breadcrumb title={title}>
                    <BreadcrumbItem name={home} href="/" />
                    <BreadcrumbItem name={info} href="/info" />
                    <BreadcrumbItem name={title} current />
            </Breadcrumb>
            <div className="container list-group" style={{marginTop:50,marginBottom:200}}>
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                {infoAssem[lang].map((item,index)=>(
                        <Link key={index} to={item.to} onClick={()=>{window.scrollTo(0, 0);}} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                </div>
                </div>
            </div>
</>
        )
}
export default Assembly;
