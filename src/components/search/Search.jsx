import { Label, Modal, TextInput } from 'flowbite-react'
import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export const Search = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const doSearch = (data) => {
        console.log(data.search);
        navigate('results/' + data.search)
        props.closeModal()
    }

    return (
        <>
            <Modal
            position={'center'}
            show={props.shownState}
            onClose={props.closeModal}
            popup={true}
            >
            <Modal.Header>
                <span className="capitalize">search movie :</span>
            </Modal.Header>
            <div className='px-5 pb-3'>
                <div className="mb-2 block">

                </div>
                <form onSubmit={handleSubmit(doSearch)}>
                    <TextInput
                        id="base"
                        type="text"
                        sizing="md"
                        icon={MagnifyingGlassIcon}
                        {...register("search", { required: true })}
                    />
                </form>

            </div>
        </Modal>
        </>

    )
}
