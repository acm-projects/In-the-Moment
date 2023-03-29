import Realm from 'realm';
export const USER_SCHEMA = 'UserSchema'

export const user_schema = {
	name: USER_SCHEMA,
	primaryKey: 'id', 
	properties: {
		id: 'int',
		Username: {type: String, indexed: true},
		Email:  {type: String},
		Password:{type: String}, 
		Location: {
			type:'object', 
			properties: {
				longitude: {type: 'double', default: 0},
				latitude: {type: 'double', default: 0},
			},
			default: {longitude: 0, latitude: 0},
		},
		Friends: {type: 'list', objectType: 'User'},  
		RestrictedApps: {type: 'list', objectType: 'App'}, 
		RestrictedTime: {type: 'list', objectType: 'String'},
		RestrictedLocation: {type: 'list', objecType:'Location'},
	},
}

const exampleUser = {
  id: 1,
  Username: "johndoe",
  Email: "johndoe@example.com",
  Password: "s3cr3t",
  Location: {
    longitude: -122.4194,
    latitude: 37.7749
  },
  Friends: [
    { id: 2, Username: "janedoe", Email: "janedoe@example.com" },
    { id: 3, Username: "bobsmith", Email: "bobsmith@example.com" }
  ],
  RestrictedApps: [
    { id: 1, Name: "Facebook", Description: "Social media app" },
    { id: 2, Name: "Instagram", Description: "Photo sharing app" }
  ],
  RestrictedTime: ["10:00", "14:30", "19:45"],
  RestrictedLocation: [
    { longitude: -122.4194, latitude: 37.7749 },
    { longitude: -122.4313, latitude: 37.7767 }
  ]
};

const databaseOptions = {
	path: 'example.realm',
	schema: [user_schema],
}


export const GetAllRestrictedApps = () => 
	new Promise ((resolve, reject) => {
		Realm.open(databaseOptions).then (realm => {realm.write(() => {
			let allRestrictedApps = realm.objects(USER_SCHEMA);
			resolve(allRestrictedApps);
		});
	})
	.catch(error => reject(error));
});


