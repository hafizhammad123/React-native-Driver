import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { collection, query, onSnapshot, doc, setDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";

function DriverComponent() {
  const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    const rideRequestsCollectionRef = collection(db, "Rides");
    const q = query(rideRequestsCollectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        if (doc.exists()) {
          data.push({ ...doc.data(), id: doc.id });
        }
      });
      setRideRequests(data);
    });

    return () => unsubscribe();
  }, []);

  const acceptRide = async (id) => {
    const rideDocRef = doc(db, "Rides", id);
    await setDoc(rideDocRef, { status: "accepted" }, { merge: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ride Requests</Text>
      <ScrollView>
        {rideRequests.map((request, index) => (
          <View key={index} style={styles.request}>
            <Text>Pickup: {request.ride.pickup.name}</Text>
            <Text>Pickup location: {request.ride.pickup.location.address}</Text>
            <Text>Destination: {request.ride.destination.name}</Text>
            <Text>Destination location: {request.ride.destination.location.address}</Text>
            <Text>Car Type: {request.ride.CarType}</Text>
            <Text>Fare: {request.ride.fare}</Text>
            {request.status !== "accepted" && (
              <TouchableOpacity onPress={() => acceptRide(request.id)}>
                <Text>Accept Ride</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  request: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 5,
  },
});

export default DriverComponent;
