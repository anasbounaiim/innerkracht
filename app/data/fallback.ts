import type { Faq, Service, Testimonial } from '~/types/content'

export const contact = {
  email: 'Tom@innerkracht.be',
  phone: '0477 25 37 11',
  address: 'Grotenbroekstraat 21, 9800 Gavere'
}

export const services: Service[] = [
  { slug:'mentale-emotionele-veerkracht', title:'Mentale & emotionele veerkracht', summary:'Begeleiding bij angsten, stress, burn-out, emotionele blokkades en rouw.', details:['Angsten en fobieën','Stress en burn-out','Depressieve gevoelens','Emotionele blokkades','Verdriet en rouwverwerking'], image:'https://innerkracht.be/wp-content/uploads/2021/11/service-1.jpg' },
  { slug:'persoonlijke-groei', title:'Persoonlijke groei & zelfbeeld', summary:'Werk aan zelfvertrouwen, een negatief zelfbeeld, prestatiedruk of mentale controle.', details:['Zelfvertrouwen en zelfbeeld','Studie- en prestatiedruk','Sporthypnose'], image:'https://innerkracht.be/wp-content/uploads/2021/11/service-2.jpg' },
  { slug:'gedrag-en-gewoontes', title:'Gedrag & gewoontes', summary:'Doorbreek patronen rond roken, alcohol, emotie-eten en ander verstoord gedrag.', details:['Roken, alcohol of marihuana','Emotie-eten','Verstoord of overmatig eten'], image:'https://innerkracht.be/wp-content/uploads/2021/11/service-3.jpg' },
  { slug:'lichaam-en-rust', title:'Lichaam & rust', summary:'Ondersteuning bij slaapproblemen en pijnklachten, bij pijn steeds na medisch overleg.', details:['Moeite met slapen','Nachtmerries','Psychosomatische of chronische pijn'], image:'https://innerkracht.be/wp-content/uploads/2021/11/service-1.jpg' },
  { slug:'zelfhypnose', title:'Zelfhypnose', summary:'Leer een eenvoudige techniek om spanning los te laten en thuis verder te bouwen.', details:['Dagelijks toepasbaar','Praktische tools','Meer rust en regie'], image:'https://innerkracht.be/wp-content/uploads/2021/11/service-2.jpg' }
]

export const faqs: Faq[] = [
  { question:'Blijf ik de controle houden tijdens hypnose?', answer:'Je hoeft niets te forceren. Niet iedereen ervaart trance op dezelfde manier. De begeleiding gebeurt zacht, op jouw tempo en volledig face-to-face.' },
  { question:'Hoe verloopt een eerste sessie?', answer:'Na een persoonlijk intakegesprek volgt een eerste hypnose. De volledige afspraak duurt volgens de huidige informatie ongeveer 1,5 tot 2 uur.' },
  { question:'Hoeveel kost een sessie?', answer:'De huidige website vermeldt een investering van €140 per sessie. Bevestig de actuele prijs bij het maken van je afspraak.' },
  { question:'Kan ik een afspraak annuleren?', answer:'De huidige regeling vermeldt dat afspraken die minder dan 48 uur vooraf per e-mail worden afgezegd, worden aangerekend.' }
]

export const testimonials: Testimonial[] = []
