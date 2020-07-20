## 3. The purpose of this item is to evaluate your understanding of Role Based Access Control. You don’t need to implement any code for this.
### - Show us your understanding of Role Based Access Control.
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
### - Apply your understanding to design a database as follows:
We will have 3 collections: User, Role and Permission. The schema below:
```
const PermissionSchema: Schema = new Schema(
  {
    name: {
      required: true,
      unique: true,
      type: String
    },
    description: {
      type: String
    },
    value: {
      required: true,
      unique: true,
      type: String
    }
  }
);
const RoleSchema: Schema = new Schema(
  {
    name: {
      required: true,
      unique: true,
      type: String
    },
    description: {
      type: String
    },
    permission: {
      required: true,
      type: [PermissionSchema]
    }
  }
);
const User: Schema = new Schema(
  {
    userId: {
      required: true,
      unique: true,
      type: String
    },
    role: {
      required: true,
      type: [RoleSchema]
    }
  }
);
```
The ```Permission collection``` should has values below:
```
[
  {
    "name": "Delete",
    "description": "Delete any resource",
    "value": "delete:any"
  },
  {
    "name": "Update",
    "description": "Update any resource",
    "value": "update:any"
  },
  {
    "name": "Read",
    "description": "Read any resource",
    "value": "read:any"
  }
]
```
The ```Role collection``` should has values below:
```
[
  {
    "name": "Admin",
    "description": "The administrator",
    "permission": [
      {
        "name": "Delete",
        "description": "Delete any resource",
        "value": "delete:any"
      },
      {
        "name": "Update",
        "description": "Update any resource",
        "value": "update:any"
      },
      {
        "name": "Read",
        "description": "Read any resource",
        "value": "read:any"
      }
    ]
  },
  {
    "name": "Contributor",
    "description": "The contributor",
    "permission": [
      {
        "name": "Read",
        "description": "Read any resource",
        "value": "read:any"
      }
    ]
  },
  {
    "name": "Manager",
    "description": "The manager",
    "permission": [
      {
        "name": "Update",
        "description": "Update any resource",
        "value": "update:any"
      },
      {
        "name": "Read",
        "description": "Read any resource",
        "value": "read:any"
      }
    ]
  }
]
```
The ```User collection``` should has values below:
```
[
  {
    "userId": "1",
    "role": [
      {
        "name": "Admin",
        "description": "The administrator",
        "permission": [
          {
            "name": "Delete",
            "description": "Delete any resource",
            "value": "delete:any"
          },
          {
            "name": "Update",
            "description": "Update any resource",
            "value": "update:any"
          },
          {
            "name": "Read",
            "description": "Read any resource",
            "value": "read:any"
          }
        ]
      }
    ]
  },
  {
    "userId": "2",
    "role": [
      {
        "name": "Contributor",
        "description": "The contributor",
        "permission": [
          {
            "name": "Read",
            "description": "Read any resource",
            "value": "read:any"
          }
        ]
      }
    ]
  },
  {
    "userId": "3",
    "role": [
      {
        "name": "Manager",
        "description": "The manager",
        "permission": [
          {
            "name": "Update",
            "description": "Update any resource",
            "value": "update:any"
          },
          {
            "name": "Read",
            "description": "Read any resource",
            "value": "read:any"
          }
        ]
      }
    ]
  }
]
```
I believe when we develop an application we have already planned for how many users that application will be serviced. Then we can choose the equivalent deploy system. I used to work with 2 applications, 1 target for 20.000 users and the other target for 2.000.000 users. (Both used microservice architecture).
#### With application service 20.000 users we used Lambda (NodeJs) for development. The main stack we used below:
* Serveless
* Lambda (NodeJs)
* API gateway
* DocumentDB
* SNS
* SQS
* SSM
* Twilio
* XRay
* Jenkin
* Cognito

We had already made a performance test with 100 requests/second (load test) and the application worked well. 

We had CI/CD for development and deployment (Jenkin).

The database we had used Database Replication with 1 master and 2 slaves. 

You can read more about ```scalable, high available and cost-effective``` in links below:
* [Price](https://aws.amazon.com/lambda/pricing/)
* [Scalable](https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html)
* [Lambda limit](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)

#### With application service 2.000.000 users we used NodeJs for development and Alicloud for deployment. The main stack we used below:
* NodeJs
* Docker
* Kubernetes
* Kafka
* Redis
* MongoDB, PostgreSQL
* Api gateway (Tyk)
* SMS & Email Notification (Nexmo)
* Mobile Message Broker & Push Notification (Ably)

We had CI/CD for development and deployment (Gitlab).

In this project we have more than 20 services and default we have 2 instances for 1 service.

With Kubernetes and Docker we had config for autoscale if the CPU of 1 instance is >= 80% and maximum is 6 instances. 

We had a health check API for checking that server is alive or not. Every 2 seconds we will ping server with health check API and if it is not alive we will start a new instance.

In this project I did not implement any deployment process and config. Just know how out system work.

That's all my knowledged about deployment and system. Thanks for reading.