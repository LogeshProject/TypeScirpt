class Company {

    private member_id : number = 1234 ;
    protected member_name : string = "Logesh";
    public company_name : string = "CocoLoco"
}

class Cilent extends Company {

    changeMemberName(name : string) {
        this.member_name = name ;
    }

}


const cilent = new Cilent()

cilent.changeMemberName("Abin");

const company = new Company()
console.log(company.company_name);



export{}