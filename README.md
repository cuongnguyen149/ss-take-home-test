## 3. The purpose of this item is to evaluate your understanding of Role Based Access Control. You don’t need to implement any code for this.
### Show us your understanding of Role Based Access Control.
I did some research and here is some information about RBAC.

Role-based access control (RBAC) refers to the idea of assigning permissions to users based on their role within an organization. It provides fine-grained control and offers a simple, manageable approach to access management that is less prone to error than assigning permissions to users individually.

When using RBAC, you analyze the system needs of your users and group them into roles based on common responsibilities and needs. You then assign one or more roles to each user and one or more permissions to each role. The user-role and role-permissions relationships make it simple to perform user assignments since users no longer need to be managed individually, but instead have privileges that conform to the permissions assigned to their role(s).

#### Benefits of RBAC

With RBAC, access management is easier as long as you adhere strictly to the role requirements. RBAC helps you:

* create systematic, repeatable assignment of permissions
* easily audit user privileges and correct identified issues
* quickly add and change roles, as well as implement them across APIs
* cut down on the potential for error when assigning user permissions
* integrate third-party users by giving them pre-defined roles
* more effectively comply with regulatory and statutory requirements for confidentiality and privacy

#### Example
You have a shop and have 2 basic roles are user and admin. 
* The admin can read/create/update/detele the product, user.
* The user can read/creaea/update/detele the cart.

We will create 2 roles ```admin``` and ```user```. And then create permissions for equivalent roles.

Permissions of ```admin``` should be:
* create:product
* update:product
* read:product
* delete:product
* create:user
* update:user
* read:user
* delete:user

Permissions of ```user``` should be:
* create:cart
* update:cart
* read:cart
* delete:cart

That's all my understanding about RBAC.

Reference:

[https://auth0.com/docs/authorization/concepts/rbac](https://auth0.com/docs/authorization/concepts/rbac)