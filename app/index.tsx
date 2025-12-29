import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Card from "@/components/card";
import { View, ScrollView, SectionList, Modal, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ThemedText from "@/components/themed-text";
import { useEffect, useState } from "react";
import PointsCard from "@/components/pointsCard";
import { LinearGradient } from "expo-linear-gradient";
import GradientCard from "@/components/gradientCard";

function CheckIcon() {
  return (
    <Ionicons name="checkmark-circle-outline" size={24} className="mr-4 text-brand-800" />
  );
}

//points card component which displays user's daily and total points and compares them to previous month




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

function TodayPointsPanel() {

  return (
    <View className="flex flex-row gap-6 mb-6">

      <GradientCard className="p-4" colors={["#3F5EFB", "#FC466B"]}>
        <View className="flex flex-row whitespace-nowrap justify-center items-center">
          <Ionicons name="star-outline" size={24} className="mr-1" color={"#eab308"}/>
          <ThemedText className="text-yellow-500 text-2xl">TODAY</ThemedText>
        </View>
        <ThemedText className="text-neutral-900 text-6xl text-center">150</ThemedText>
        <ThemedText className="text-subtext-color text-center text-base">Points</ThemedText>
      </GradientCard>
      <GradientCard className="p-4 " colors={["#2A7B9B", "#57C785", "#EDDD53"]}>
        <View className="flex flex-row whitespace-nowrap justify-center items-center">
          <Ionicons name="flame-outline" size={24} className="mr-1" color={"#d97706"}/>
          <ThemedText className="text-amber-600 text-2xl">STREAK</ThemedText>
        </View>
        <ThemedText className="text-neutral-900 text-6xl text-center">18</ThemedText>
        <ThemedText className=" text-center text-base text-subtext-color">Days</ThemedText>
      </GradientCard>
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
    <View className="bg-red h-full flex-1 p-6">
      <ThemedText className="text-5xl text-center mt-6 mb-8 text-brand-800">Quest Board</ThemedText>
      <TodayPointsPanel />
      <PointsCard />
      <Card title="Your Tasks" buttonTitle="New Task" titleIcon={<Ionicons name="receipt-outline" size={24} className="text-brand-800 mr-2" />} onPress={() => setIsModalOpen(true)}>


      </Card>
      <Modal visible={isModalOpen} animationType="slide" transparent={true} onRequestClose={() => setIsModalOpen(false)} >
        <AddTaskModalContent />
      </Modal>
    </View>
  );
}
