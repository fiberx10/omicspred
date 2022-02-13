import React from "react";

import Container from "./components/container";

import p2 from "../../Assets/Cohorots/Fenland_study_logo.png";
import p1 from "../../Assets/Cohorots/interval-logo.png";
import p4 from "../../Assets/Cohorots/UKB_largeFeature.png";
import p3 from "../../Assets/Cohorots/Viking_logo.png";
import p5 from "../../Assets/Cohorots/Viking_logo2.jpg";

const Cohorts = () => {
  return (
    <div className="pl-[5%] w-[90%] pt-[70px]">
      <Container
        src={p1}
        title="The INTERVAL Study"
        text="INTERVAL is a cohort of healthy blood donors (N~50,000; recruited 2012-2014) which was set up by the Universities of Cambridge and Oxford in collaboration with NHS Blood and Transplant (NHSBT). INTERVAL’s design is a randomised trial to study the safety of varying the time interval between blood donations. INTERVAL participants include approx. 25,000 men and 25,000 women, recruited at aged 18 years and older (median 44 years of age) across 25 NSHBT blood donation centres across England. Methods of collection have been described previously. As described here, blood samples have been extensively profiled using various omics technologies."
      />
      <Container
      title="The Fenland Study"
        src={p2}
        text="The Fenland study is a population-based cohort of about 12,000 participants of Caucasian-ancestry born between 1950 and 1975 who underwent detailed phenotyping at the baseline visit from 2005 to 2015. Participants were recruited from general practice surgeries in the Cambridgeshire region in the UK. The study aims to investigate the interaction between environmental and genetic factors in determining obesity, type 2 diabetes, and related metabolic disorders. These conditions are a considerable public health concern, but their causes and factors that predict who will be affected by them are not completely understood."
      />
      <Container
      title="The NSPHS"
        src={p2}
        text="The Northern Swedish Population Health Study (NSPHS)) is a Swedish community-based cohort with randomly recruited participants from the parishes of Karesuando and Soppero, County of Norrbotten (median age, 50 years; N = 1,037). People in this area either lead a traditional, subsistence-based, lifestyle mainly based on reindeer herding, hunting and fishing, or a lifestyle similar to other western European countries. The study measures a broad spectrum of environmental (e.g. occupation, diet, physical activity and daylight exposure) and genetic (e.g. single-nucleotide polymorphisms) factors of relevance for health risk. A comprehensive set of health indicators, clinical measures (e.g. blood lipids, proteins) and diagnoses of cardiovascular, orthopedic and metabolic diseases has also been collected."
      />
      <Container
      title="The ORCADES"
        src={p3}
        text="The Orkney Complex Disease Study (ORCADES) is a family-based study that seeks to identify genetic factors influencing cardiovascular and other disease risk in the isolated archipelago of the Orkney Isles in northern Scotland (McQuillan et al., 2008). Genetic diversity in this population is decreased compared to Mainland Scotland, consistent with the high levels of endogamy historically. 2078 participants aged 16-100 years were recruited between 2005 and 2011, most having three or four grandparents from Orkney, the remainder with two Orcadian grandparents. Fasting blood samples were collected and many health-related phenotypes and environmental exposures were measured in each individual. Extensive proteomic, methylomic, metabolomic, glycomic and lipidomic data are also available."
      />
      <Container
      title="The UK Biobank"
        src={p4}
        text="The UK Biobank is a prospective cohort study with deep genetic and phenotypic data collected on approximately 500,000 individuals from across the United Kingdom, aged between 40 and 69 at recruitment. A rich variety of phenotypic and health-related information is available on each participant, including biological measurements, lifestyle indicators, biomarkers in blood and urine, and imaging of the body and brain. Follow-up information is provided by linking health and medical records. Genome-wide genotype data have been collected on all participants, providing many opportunities for the discovery of new genetic associations and the genetic bases of complex traits."
      />
      <Container
      title="The VIKING Health Study"
       src={p5}
        text="The VIKING Health Study aims to discover the genes and variants that influence the risk of common, complex diseases. Many common diseases are known as complex, because they’re influenced by many genes and environmental factors. Common, complex diseases include diabetes, osteoporosis, stroke, heart disease, myopia, glaucoma and chronic kidney and lung disease. Finding the genes involved is the first step on the road to developing new ways of diagnosing and treating these diseases. From March 2013 to March 2015, the study recruited 2,105 volunteers, with at least two grandparents from Shetland. Each volunteer completed a postal health survey questionnaire and attended a 2-hour measurement clinic. They also attended a 20-minute venepuncture clinic, to give a blood sample. The dedicated research clinic was based in Lerwick."
      />
    </div>
  );
};

export default Cohorts;
