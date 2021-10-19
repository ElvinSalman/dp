// import React, { Component } from 'react'

// import { Breadcrumb, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";

// import { useTranslation } from 'react-i18next';

// const ElecReg=()=> {
//     const { t, i18n } = useTranslation(['']);
//     const lang=i18n.language;
//     let title=lang==="en"?"Electronic engine regulator ERD-3BM":lang==="ru"?"Электронный регулятор двигателя ЭРД-3БМ":"Mühərrikin elektron tənzimləyicisi ЭРД-3ВМ";
//     let adres=lang==="en"?"/info/fuelfeedingandadjustment":lang==="ru"?"/info/podacatoplivaiupravleniye":"/info/yanacaglaqidalanmavetenzimlenme";
//     let info2=lang==="en"?"TV3-117ВМ engine fuel supply and control system":lang==="ru"?"Система подачи топлива и управления двигателем ТВ3-117ВМ":"ТВ3-117ВМ müherrikin yanacağla qidalanma və tənzimlənmə sistemi";
//     let info1=lang==="en"?"TB3-117BM Engine Subtopics":lang==="ru"?"Подтемы двигателя TB3-117M":"TB3-117BM mühərrikinə aid altmövzular";
//     let home=lang==="en"?"Home":lang==="ru"?"Главная":"Ana səhifə";
//         return (
//             <div>
//                 <Breadcrumb title={title}>
//                     <BreadcrumbItem name={home} href="/" />
//                     <BreadcrumbItem name={info1} href="/info" />
//                     <BreadcrumbItem name={info2} href={adres} />
//                     <BreadcrumbItem name={title} current />
//                 </Breadcrumb>
//             </div>
//         )
// }
// export default ElecReg;