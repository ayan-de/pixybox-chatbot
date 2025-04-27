export const useCustomer = () =>{
    const customerName = useState("customerName",()=>"");
    const hasNameError = computed(()=> customerName.value.length < 2)

    const customerInitials = computed(() => {
        const name = customerName.value.split(" ")

        if(name.length<2){
            return customerName.value.substring(0,2);
        }

        return `${name[0][0]}${name[1][0]}`
    })

    return({customerName,hasNameError,customerInitials})
}