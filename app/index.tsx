import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Card from "@/components/card";
import { View, ScrollView, SectionList, Modal, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ThemedText from "@/components/themed-text";
import { useState } from "react";

function CheckIcon() {
  return (
    <Ionicons name="checkmark-circle-outline" size={24} className="mr-4 text-brand-800" />
  );
}

//points card component which displays user's daily and total points and compares them to previous month



function PointsCard() {
  return (
    <Card className="m-4" title="Points Summary" titleIcon={<Ionicons name="trophy" size={24} className="text-yellow-600 mr-2" />} >
      <View className="p-2">
        <View className="flex flex-row justify-between items-center mb-4">
          <View>
            <ThemedText className="text-default-font font-semibold text-lg">Today's Points</ThemedText>
            <ThemedText className="text-3xl font-bold text-brand-800">150</ThemedText>
          </View>
          <View className="flex items-center justify-center">
            <ThemedText className="text-subtext-color">+15% from yesterday</ThemedText>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <View>
            <ThemedText className="text-default-font font-semibold text-lg">Total Points</ThemedText>
            <ThemedText className="text-3xl font-bold text-yellow-600">3,450</ThemedText>
          </View>
          <View className="flex items-center justify-center">
            <ThemedText className="text-subtext-color">+10% from last month</ThemedText>
          </View>
        </View>
      </View>
    </Card>
  );
}

//type def for task item
type TaskItem = {
  id: string;
  title: string;
  points: number;
  completed: boolean;
};

//home view for the app, it has three main sections: greeting, stats summary and quick actions

function TaskRow({ task }: { task: TaskItem }) {
  return (
    <View className="p-4 flex flex-row items-center">
      <CheckIcon />
      <ThemedText className="text-neutral-900">{task.title}</ThemedText>
      <View className="flex-1" />
      <View className="flex flex-row items-center bg-yellow-100 px-2 py-1 rounded-md">
        <Ionicons name="star" size={16} className="text-yellow-600 mr-1" />
        <ThemedText className="text-yellow-800 font-semibold">{task.points}</ThemedText>
      </View>
    </View>
  );
}




export default function Home() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);


  function AddTaskModalContent() {
    return (
      <View className="justify-center items-center flex-1 bg-neutral-50 bg-opacity-50">
        <View className="bg-neutral-100 rounded-md p-6 w-5/6 justify-center items-center ">
          <View className="flex flex-row justify-between items-center mb-4 border-b border-neutral-300 pb-2 w-full">
            <ThemedText className="text-xl font-bold text-brand-800">Add New Task</ThemedText>
            <TouchableOpacity onPress={() => setIsModalOpen(false)}>
              <Ionicons name="close" size={24} className="text-neutral-50" />
            </TouchableOpacity>
          </View>

          <View className="bg-neutral-100 rounded-lg w-full p-4">

            <ThemedText className="text-neutral-900 mb-2">Inputs for title, description, datetime, difficulty etc.</ThemedText>
            
            <TouchableOpacity onPress={() => setIsModalOpen(false)} className="bg-brand-800 mt-4 px-4 py-2 rounded-md">
              <ThemedText className="text-neutral-50 text-center">Add Task</ThemedText>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }

  return (
    <ScrollView className="bg-neutral-0 flex-1 w-full">
      <PointsCard />
      <Card className="mx-4 my-0 mb-4" title="Your Tasks" buttonTitle="New Task" titleIcon={<Ionicons name="receipt-outline" size={24} className="text-brand-800 mr-2" />} onPress={() => setIsModalOpen(true)}>
        <SectionList
          sections={[
            { title: "Today", data: [{ id: "1", title: "Task A", points: 10, completed: false }, { id: "2", title: "Task B", points: 5, completed: false }] },
            { title: "Tomorrow", data: [{ id: "3", title: "Task C", points: 15, completed: false }] },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <TaskRow task={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <ThemedText className="bg-brand-100 px-4 py-2 font-bold text-brand-900 rounded-sm">{title}</ThemedText>
          )}
        />
      </Card>
      <Modal visible={isModalOpen} animationType="slide" transparent={true} onRequestClose={() => setIsModalOpen(false)} >
        <AddTaskModalContent />
      </Modal>
    </ScrollView>
  );
}
