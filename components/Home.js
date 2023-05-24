import React, { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';
// import styled from 'styled-components';
import SmoothieCard from './SmoothieCard';

export default function Home(){
    const [fetchError, setFetchError] = useState(null);
    const [smoothies, setSmoothies] = useState(null);

    useEffect(()=>{
        const fetchSmoothies = async () =>{
            const { data, error } = await supabase
            .from('smoothies')
            .select()

            if(error){
                setFetchError('Could not get information')
                setSmoothies(null);
                console.log(error);
            }
            if(data){
                setSmoothies(data);
                setFetchError(null);
            }
        }
        fetchSmoothies();
    }, [])
    // console.log(supabase);
    return(
     <>
     <div className='page home'>
        {/* <h2>Home</h2> */}
        {fetchError && (<p>{fetchError}</p>)}
        {smoothies && ( 
            <div className="smoothies">
                <div className="smoothie-grid">
                {smoothies.map(smoothie => (
                    <SmoothieCard key={smoothie.id} smoothie={smoothie} />
                ))}
                </div>
            </div>
        )}
     </div>
     </>
    )
}