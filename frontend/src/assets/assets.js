import  mainphoto from './mainphoto.jpg'
import titlelogo from './titlelogo.png'
import about from './about.jpg'
import banner from './banner.png'
import profile from './profile.jpg'
import dropdown from './dropdown.png'
import contact from './contact.jpg'
import acnetreatment from './acnetreatment.jpg'
import skinrejuvenation from './skinrejuvenation.jpg'
import pigmentation from './pigmentation.jpg'
import antiaging from './antiaging.jpg'
import laserhairremoval from './laserhairremoval.jpg'
import eczema from './eczema.jpg'
import moleremoval from './moleremoval.jpg'
import vitiligo from './vitiligo.jpg'
import skincancer from './skincancer.jpg'
import tattooremoval from './tattooremoval.jpeg'
import hairlosstreatment from './hairlosstreatment.jpg'
import dandruff from './dandruff.jpg'
import hairthinning from './hairthinning.jpg'
import greyhairmanagement from './greyhairmanagement.jpg'
import scalp_psoriasis from './scalp_psoriasis.jpg'
import hairtexture from './hairtexture.jpg'
import location from './location.png'
import tel_logo from './tel_logo.png'
import menuicon from './menuicon.png'
import crossicon from './crossicon.png'
import uploadicon from './uploadicon.png'

export const assets={
    mainphoto,
    titlelogo,
    about,
    banner,
    profile,
    dropdown,
    contact,
    acnetreatment,
    skinrejuvenation,
    pigmentation,
    antiaging,
    laserhairremoval,
    eczema,
    moleremoval,
    vitiligo,
    skincancer,
    tattooremoval,
    hairlosstreatment,
    dandruff,
    hairthinning,
    greyhairmanagement,
    scalp_psoriasis,
    hairtexture,
    location,
    tel_logo,
    menuicon,
    crossicon,
    uploadicon
}

export const Services = [
    {
      _id:"service1",
      category: "Acne Treatment",
      image:acnetreatment,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Comprehensive acne solutions, from medications to advanced procedures, designed to reduce acne and prevent scarring.",
      services: [
        "Topical/Oral Medications",
        "Chemical Peels",
        "Laser Therapy",
        "Acne Scar Removal (Microneedling, Laser)",
      ],
    },
    {
      _id:"service2",
      category: "Skin Rejuvenation",
      image:skinrejuvenation,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Treatments aimed at restoring skin vitality, improving texture, and enhancing your natural glow.",
      services: [
        "Chemical Peels",
        "Microdermabrasion",
        "Microneedling",
        "Laser Resurfacing",
        "PRP Therapy",
      ],
    },
    {
      _id:"service3",
      category: "Pigmentation Treatment",
      image:pigmentation,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Solutions to reduce pigmentation and even skin tone through advanced topical and laser treatments.",
      services: [
        "Laser Therapy (Q-switch, IPL)",
        "Topical Treatments (Hydroquinone, Retinoids)",
        "Chemical Peels",
      ],
    },
    {
      _id:"service4",
      category: "Anti-Aging Treatments",
      image:antiaging,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Non-invasive and minimally invasive treatments to combat signs of aging and promote youthful skin.",
      services: [
        "Botox",
        "Dermal Fillers",
        "Thread Lift",
        "Skin Tightening (Radiofrequency, Ultrasound)",
      ],
    },
    {
      _id:"service5",
      category: "Laser Hair Removal",
      image:laserhairremoval,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Safe and effective permanent hair reduction for smooth, hair-free skin.",
      services: [
        "Permanent Hair Reduction using Laser Technology (Diode, Alexandrite, ND:YAG)",
      ],
    },
    {
      _id:"service6",
      category: "Eczema, Psoriasis, and Dermatitis Management",
      image:eczema,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Comprehensive care to manage chronic skin conditions with medications and phototherapy.",
      services: [
        "Prescription Medications (Steroids, Biologics)",
        "Light Therapy (Phototherapy)",
      ],
    },
    {
      _id:"service7",
      category: "Mole, Wart, and Skin Tag Removal",
      image:moleremoval,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Quick and effective removal of unwanted skin growths using modern medical techniques.",
      services: ["Cryotherapy", "Electrocautery", "Surgical Excision"],
    },
    {
      _id:"service8",
      category: "Vitiligo Treatment",
      image:vitiligo,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Specialized therapies to restore pigmentation and manage vitiligo effectively.",
      services: ["UVB Light Therapy", "Topical Corticosteroids", "Skin Grafting"],
    },
    {
      _id:"service9",
      category: "Skin Cancer Screening & Treatment",
      image:skincancer,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Advanced diagnostics and precise treatments for skin cancer, ensuring optimal care.",
      services: ["Biopsy", "Mohs Surgery", "Cryosurgery"],
    },
    {
      _id:"service10",
      category: "Tattoo Removal",
      image:tattooremoval,
      type:":skinservices",
      consultingfor:"Skin Service",
      description:
        "Safe and effective tattoo removal using advanced laser technology.",
      services: ["Laser Treatment (Q-switch Laser)"],
    },
    {
      _id:"service11",
      category: "Hair Loss Treatment (Alopecia)",
      image:hairlosstreatment,
      type:":hairservices",
      consultingfor:"Hair Service",
      description:
        "Advanced therapies to combat hair loss and stimulate regrowth for healthier, thicker hair.",
      services: [
        "PRP Therapy",
        "Minoxidil and Finasteride Treatment",
        "Low-Level Laser Therapy (LLLT)",
        "Hair Transplant (FUE, FUT Techniques)",
      ],
    },
    {
      _id:"service12",
      category: "Dandruff and Scalp Conditions",
      image:dandruff,
      type:":hairservices",
      consultingfor:"Hair Service",
      description:
        "Effective treatments to address dandruff and other scalp conditions, ensuring a healthy scalp.",
      services: [
        "Medicated Shampoos and Topical Treatments",
        "Scalp Injections",
      ],
    },
    {
      _id:"service13",
      category: "Hair Thinning Solutions",
      image:hairthinning,
      type:":hairservices",
      consultingfor:"Hair Service",
      description:
        "Personalized solutions to address thinning hair and promote regrowth through modern techniques.",
      services: [
        "Nutritional Counseling",
        "Mesotherapy",
        "Microneedling for Hair Regrowth",
      ],
    },
    {
      _id:"service14",
      category: "Grey Hair Management",
      image:greyhairmanagement,
      type:":hairservices",
      consultingfor:"Hair Service",
      description:
        "Treatments to delay greying and maintain natural hair color with supplements and therapies.",
      services: [
        "Supplements (e.g., Biotin, Vitamin B12)",
        "Anti-Greying Treatments",
      ],
    },
    {
      _id:"service15",
      category: "Scalp Psoriasis Treatment",
      image:scalp_psoriasis,
      type:":hairservices",
      consultingfor:"Hair Service",
      description:
        "Comprehensive care for scalp psoriasis, including medications and advanced light therapy.",
      services: ["Topical Steroids", "Light Therapy"],
    },
    {
      _id:"16",
      category: "Hair Texture Improvement",
      image:hairtexture,
      type:":hairservices",
      consultingfor:"Hair Service",
      description:
        "Innovative treatments to enhance hair texture, making it smoother, shinier, and healthier.",
      services: ["Keratin Treatments", "Scalp Exfoliation"],
    },
  ];
  
 

