import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Card from "@/components/card";
import { View, ScrollView, SectionList, Modal, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ThemedText from "@/components/themed-text";
import { useEffect, useState } from "react";
import GradientCard from "@/components/gradientCard";
import tailwindConfig from "@/tailwind.config";


function CheckIcon() {
  return (
    <Ionicons name="checkmark-circle-outline" size={24} className="mr-4 text-brand-800" />
  );
}


const colors = tailwindConfig.theme?.extend?.colors as any;

const yellowColor = "#eab308";


//points card component which displays user's daily and total points and compares them to previous month




//type def for task item
type TaskItem = {
  id: string;
  title: string;
  points: number;
  completed: boolean;
};

//Task Row TODO: move to another file

function TaskRow({ task }: { task: TaskItem }) {
  return (
    //change color based on completion status

    <View className={`flex-row p-4 justify-between items-center mb-3 rounded-2xl border${task.completed ? ' border-brand-800 bg-brand-200/50' : ' border-cyan-700 bg-cyan-950/50'} `}>
      <View className="flex-row items-center">
        {task.completed ? <Ionicons name="checkmark-circle-outline" size={24} color={colors.brand[800]} className="mr-4" /> : <Ionicons name="ellipse-outline" size={24} className="mr-4" color={"cyan"}/>}
        <ThemedText className={`text-lg ${task.completed ? 'line-through text-subtext-color' : 'text-neutral-900'}`}>{task.title}</ThemedText>
      </View>
      <View className="border ml-auto flex-row items-center p-2 rounded-lg bg-yellow-700/50 border-yellow-500">
        <Ionicons name="star" color={yellowColor}/>
        <ThemedText className="text-yellow-500 ml-1">
          {task.points}
          </ThemedText>
      </View>
    </View>
  );
}


function TodayPointsCard() {
  return (
    <View className="flex-row mb-6">
      <GradientCard className="mr-6 flex-1" colors={[yellowColor, "#C5DE37"]}>
        <View className="flex flex-row whitespace-nowrap justify-center items-center">
          <Ionicons name="star-outline" size={24} className="mr-1" color={"#eab308"} />
          <ThemedText className="text-yellow-500 text-2xl">TODAY</ThemedText>
        </View>
        <ThemedText className="text-neutral-900 text-6xl text-center">150</ThemedText>
        <ThemedText className="text-subtext-color text-center text-base">Points</ThemedText>
      </GradientCard>
      <GradientCard className="flex-1" colors={["#d97706", "#FC466B"]}>
        <View className="flex flex-row whitespace-nowrap justify-center items-center">
          <Ionicons name="flame-outline" size={24} className="mr-1" color={"#d97706"} />
          <ThemedText className="text-amber-600 text-2xl">STREAK</ThemedText>
        </View>
        <ThemedText className="text-neutral-900 text-6xl text-center">18</ThemedText>
        <ThemedText className="text-center text-base text-subtext-color">Days</ThemedText>
      </GradientCard>
    </View>
  );
}

function TotalScoreCard() {
  return (
    <GradientCard className="mb-6" colors={["#8E2DE2", "#4A00E0"]}>
      <View className="flex flex-row whitespace-nowrap justify-center items-center">
        <Ionicons name="trophy-outline" size={24} className="mr-1" color={"#8E2DE2"} />
        <ThemedText className="text-purple-400 text-4xl">TOTAL SCORE</ThemedText>
      </View>
      <ThemedText className="text-neutral-900 text-6xl text-center">12,450</ThemedText>
      <ThemedText className="text-center text-lg text-subtext-color">Points</ThemedText>
      <View className="flex-row justify-center items-center mt-2">
        <Ionicons name="trending-up-sharp" color={colors.brand[800]} />
        <ThemedText className="text-brand-800 ml-2">+ 15% from last month</ThemedText>
      </View>
    </GradientCard>
  );
}

function TodaysQuestsCard() {
  const tasks: TaskItem[] = [
    { id: "1", title: "Complete React Native module", points: 50, completed: false },
    { id: "2", title: "Workout for 30 minutes", points: 30, completed: true },
    { id: "3", title: "Read 20 pages of a book", points: 20, completed: false },
  ];

  return (
    <GradientCard className="mb-6" colors={["#11998e", "#22d3ee"]}>
      <View className="flex flex-row whitespace-nowrap justify-center items-center mb-4">
        <Ionicons name="sparkles-outline" size={24} className="mr-1" color={"cyan"} />
        <ThemedText className="text-cyan-400 text-4xl">TODAY'S QUESTS</ThemedText>
      </View>
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </GradientCard>
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
    <ScrollView className="flex-1 p-6">
      <ThemedText className="text-5xl text-center mt-6 mb-8 text-brand-800">Quest Board</ThemedText>
      <TodayPointsCard />
      <TotalScoreCard />
      <TodaysQuestsCard />
      <Modal visible={isModalOpen} animationType="slide" transparent={true} onRequestClose={() => setIsModalOpen(false)} >
        <AddTaskModalContent />
      </Modal>
    </ScrollView>
  );
}
