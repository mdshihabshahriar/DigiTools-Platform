import React  from 'react';
import ModelCard from './ModelCard';
import { use } from 'react';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    console.log(models)
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    models.map(model => 
                        <ModelCard key={model.id} model={model} />
                    )
                }
            </div>
        </div>
    );
};

export default Models;