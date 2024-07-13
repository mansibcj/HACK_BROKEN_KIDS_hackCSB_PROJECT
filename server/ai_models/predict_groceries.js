// Import TensorFlow.js
import * as tf from "@tensorflow/tfjs";

// Prepare the synthetic data
const incomes = [
  5000, 5454, 5909, 6363, 6818, 7272, 7727, 8181, 8636, 9090, 9545, 10000,
  10454, 10909, 11363, 11818, 12272, 12727, 13181, 13636, 14090, 14545, 15000,
  15454, 15909, 16363, 16818, 17272, 17727, 18181, 18636, 19090, 19545, 20000,
  20454, 20909, 21363, 21818, 22272, 22727, 23181, 23636, 24090, 24545, 25000,
  25454, 25909, 26363, 26818, 27272, 27727, 28181, 28636, 29090, 29545, 30000,
  30454, 30909, 31363, 31818, 32272, 32727, 33181, 33636, 34090, 34545, 35000,
  35454, 35909, 36363, 36818, 37272, 37727, 38181, 38636, 39090, 39545, 40000,
  40454, 40909, 41363, 41818, 42272, 42727, 43181, 43636, 44090, 44545, 45000,
  45454, 45909, 46363, 46818, 47272, 47727, 48181, 48636, 49090, 49545, 50000,
];
const expenses = [
  5993, 4975, 6800, 8803, 5541, 5545, 8207, 6824, 7820, 5367, 7455, 9242, 7092,
  7397, 7983, 9397, 7211, 9578, 9178, 9622, 10142, 9393, 11177, 8532, 12420,
  12310, 10397, 10807, 10863, 11012, 11854, 10769, 12832, 11722, 12130, 11383,
  13628, 13672, 12548, 12917, 13091, 12147, 13694, 14185, 13875, 14352, 15138,
  13480, 15185, 14276, 16123, 15649, 15855, 15982, 15939, 16628, 15275, 17478,
  16290, 17056, 16399, 17994, 16719, 18511, 17006, 18382, 18602, 18461, 18629,
  18272, 19485, 19024, 20023, 18769, 20415, 19812, 19996, 20392, 19386, 20859,
  21232, 20469, 20550, 20520, 21190, 21792, 22302, 21546, 22036, 22741, 22730,
  23364, 23020, 23364, 23870, 23023, 24682, 23867, 25023, 24577,
];

// Convert the data to tensors
const incomeTensor = tf.tensor2d(incomes, [incomes.length, 1]);
const expenseTensor = tf.tensor2d(expenses, [expenses.length, 1]);

// Define a simple linear regression model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Compile the model
model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

// Train the model
async function trainModel() {
  await model.fit(incomeTensor, expenseTensor, {
    epochs: 500,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
      },
    },
  });
}

// Make a prediction
async function predictExpense(income) {
  const inputTensor = tf.tensor2d([income], [1, 1]);
  const prediction = model.predict(inputTensor);
  const predictedValue = (await prediction.data())[0];
  return predictedValue;
}

// Run the training
trainModel().then(() => {
  // Make a prediction for a given income
  predictExpense(5000).then((prediction) => {
    console.log(
      `Predicted monthly grocery expenses for an income of ₹5000: ₹${prediction.toFixed(
        2
      )}`
    );
  });
});
