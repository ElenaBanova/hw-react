import UseCreateCar from "./useCreateCar.ts";



const CreateCarForm = () => {
    // const {handleSubmit, register, formState: {errors}} = useForm<ICar>({
    //     mode: 'all',
    //     resolver: joiResolver(carValidator)
    // });
    // const createHandler = (data: ICar) => {
    //     addCar(data);
    // }
    const {handleSubmit, register, createHandler, errors} = UseCreateCar()
    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <div><input className='border-2' type={"text"} {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div><input className='border-2' type={"number"} {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div><input className='border-2' type={"number"} {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>Save car</button>
            </form>
        </div>

    );
}

export default CreateCarForm;