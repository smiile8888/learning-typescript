let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost;

if (typeof originalCost === "number") {
    let cost: number = originalCost;
} else {
    let x = originalCost;
}

enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture"
}

interface InventoryItem {
    displayName: string;
    inventoryType: "computer" | "furniture";
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;

    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {
}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
});

// Generics
// define T, U as customizeable
// Type variable
function clone<T, U>(source: T, options: U): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

const cloned = clone(inventoryItem, { deep: true });

// It can also use with interface
interface KeyValuePair<TKey, TValue> {
    Key: TKey,
    Value: TValue
}

var KeyValuePair: KeyValuePair<string, number> = {Key: "something", Value: 1234};
var KeyValuePair2: KeyValuePair<number, boolean> = {Key: 1234, Value: true};