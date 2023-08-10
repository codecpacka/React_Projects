import { useForm } from "react-hook-form"


export default function ReactUseForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)


    console.log(watch("example")) // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            {console.log(register)}
            <input defaultValue="test" {...register("example")} />

            <br />
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true, message: "ping" })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>{console.log(errors.exampleRequired)}</span>}


            <input type="submit" />
        </form>
    )
}

