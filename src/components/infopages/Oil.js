import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import infoOil from "../../data/oil.json";

import { useTranslation } from 'react-i18next';

import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

const Oil=()=> {

    const { t, i18n } = useTranslation(['']);
    const lang=i18n.language;
    let title=lang=="en"?"TV3-117ВМ engine oil system":lang=="ru"?"Масляная система двигателя ТВ3-117ВМ":"ТВ3-117ВМ müherrikin yağ sistemi";
    let info=lang=="en"?"TB3-117BM Engine Subtopics":lang=="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
    let home=lang=="en"?"Home":lang=="ru"?"Главная":"Ana səhifə";

        return (
            <>
            <Breadcrumb title={title}>
                    <BreadcrumbItem name={home} href="/" />
                    <BreadcrumbItem name={info} href="/info" />
                    <BreadcrumbItem name={title} current />
            </Breadcrumb>
            <div className="container list-group" style={{marginTop:50,marginBottom:250}}>
                <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6">
                {infoOil[lang].map((item,index)=>(
                        <Link key={index} to={item.to} onClick={()=>{window.scrollTo(0, 0);}} className="list-group-item list-group-item-action">{item.title}</Link>
                ))}
                </div>
                </div>
            </div>
</>
        )
    }
export default Oil;