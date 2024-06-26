class UserDto {
    constructor(user) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.age = user.age;
        this.password = user.password;
        this.cart = user?.cart;
        this.role = user?.role;
        this.last_connection = new Date();
        this.documents = []
    }
};

export {UserDto};