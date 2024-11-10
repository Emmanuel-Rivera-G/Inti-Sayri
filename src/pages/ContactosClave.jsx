import React from 'react';
import Sliderbar from '../components/Sliderbar';
import Header from '../components/Header';
import ContactCard from '../components/ContactCard';



const ContactosClave = () => {
    return (
        <div>
            <Header userName="Marlon" />
            <Sliderbar />
            <main className="p-6 bg-azulBlanco min-h-screen pt-[40px]">
                <h2 className="text-3xl font-bold text-azulOscuro mb-6 pt-2">Contactos Clave</h2>
                <input
                    type="text"
                    placeholder="Buscar contactos..."
                    className="w-full p-3 mb-6 rounded-lg shadow-md border focus:outline-none focus:border-azulAcento"
                />
                <div className="flex flex-col gap-6">
                    <ContactCard
                        name="Comisaría"
                        location="Cerro Colorado"
                        phone="+99999"
                    />
                    <ContactCard
                        name="Bomberos"
                        location="Cercado"
                        phone="+98765"
                    />
                    <ContactCard
                        name="Emergencia Vial"
                        location="Miraflores"
                        phone="+91234"
                    />
                </div>
            </main>
        </div>
    );
}

export default ContactosClave;
