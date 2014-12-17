﻿/**
* @namespace Top level namespace for collections, a TypeScript data structure library.
*/
declare module Collections {
    /**
    * Function signature for comparing
    * <0 means a is smaller
    * = 0 means they are equal
    * >0 means a is larger
    */
    interface ICompareFunction<T> {
        (a: T, b: T): number;
    }
    /**
    * Function signature for checking equality
    */
    interface IEqualsFunction<T> {
        (a: T, b: T): boolean;
    }
    /**
    * Function signature for Iterations. Return false to break from loop
    */
    interface ILoopFunction<T> {
        (a: T): boolean;
    }
    /**
    * Default function to compare element order.
    * @function
    */
    function defaultCompare<T>(a: T, b: T): number;
    /**
    * Default function to test equality.
    * @function
    */
    function defaultEquals<T>(a: T, b: T): boolean;
    /**
    * Default function to convert an object to a string.
    * @function
    */
    function defaultToString(item: any): string;
    /**
    * Joins all the properies of the object using the provided join string
    */
    function makeString<T>(item: T, join?: string): string;
    /**
    * Checks if the given argument is a function.
    * @function
    */
    function isFunction(func: any): boolean;
    /**
    * Checks if the given argument is undefined.
    * @function
    */
    function isUndefined(obj: any): boolean;
    /**
    * Checks if the given argument is a string.
    * @function
    */
    function isString(obj: any): boolean;
    /**
    * Reverses a compare function.
    * @function
    */
    function reverseCompareFunction<T>(compareFunction: ICompareFunction<T>): ICompareFunction<T>;
    /**
    * Returns an equal function given a compare function.
    * @function
    */
    function compareToEquals<T>(compareFunction: ICompareFunction<T>): IEqualsFunction<T>;
    /**
    * @namespace Contains various functions for manipulating arrays.
    */
    module arrays {
        /**
        * Returns the position of the first occurrence of the specified item
        * within the specified array.
        * @param {*} array the array in which to search the element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between 2 elements.
        * @return {number} the position of the first occurrence of the specified element
        * within the specified array, or -1 if not found.
        */
        function indexOf<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        /**
        * Returns the position of the last occurrence of the specified element
        * within the specified array.
        * @param {*} array the array in which to search the element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between 2 elements.
        * @return {number} the position of the last occurrence of the specified element
        * within the specified array or -1 if not found.
        */
        function lastIndexOf<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        /**
        * Returns true if the specified array contains the specified element.
        * @param {*} array the array in which to search the element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function to
        * check equality between 2 elements.
        * @return {boolean} true if the specified array contains the specified element.
        */
        function contains<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * Removes the first ocurrence of the specified element from the specified array.
        * @param {*} array the array in which to search element.
        * @param {Object} item the element to search.
        * @param {function(Object,Object):boolean=} equalsFunction optional function to
        * check equality between 2 elements.
        * @return {boolean} true if the array changed after this call.
        */
        function remove<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * Returns the number of elements in the specified array equal
        * to the specified object.
        * @param {Array} array the array in which to determine the frequency of the element.
        * @param {Object} item the element whose frequency is to be determined.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between 2 elements.
        * @return {number} the number of elements in the specified array
        * equal to the specified object.
        */
        function frequency<T>(array: T[], item: T, equalsFunction?: IEqualsFunction<T>): number;
        /**
        * Returns true if the two specified arrays are equal to one another.
        * Two arrays are considered equal if both arrays contain the same number
        * of elements, and all corresponding pairs of elements in the two
        * arrays are equal and are in the same order.
        * @param {Array} array1 one array to be tested for equality.
        * @param {Array} array2 the other array to be tested for equality.
        * @param {function(Object,Object):boolean=} equalsFunction optional function used to
        * check equality between elemements in the arrays.
        * @return {boolean} true if the two arrays are equal
        */
        function equals<T>(array1: T[], array2: T[], equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * Returns shallow a copy of the specified array.
        * @param {*} array the array to copy.
        * @return {Array} a copy of the specified array
        */
        function copy<T>(array: T[]): T[];
        /**
        * Swaps the elements at the specified positions in the specified array.
        * @param {Array} array The array in which to swap elements.
        * @param {number} i the index of one element to be swapped.
        * @param {number} j the index of the other element to be swapped.
        * @return {boolean} true if the array is defined and the indexes are valid.
        */
        function swap<T>(array: T[], i: number, j: number): boolean;
        function toString<T>(array: T[]): string;
        /**
        * Executes the provided function once for each element present in this array
        * starting from index 0 to length - 1.
        * @param {Array} array The array in which to iterate.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        function forEach<T>(array: T[], callback: (item: T) => boolean): void;
    }
    interface ILinkedListNode<T> {
        element: T;
        next: ILinkedListNode<T>;
    }
    class LinkedList<T> {
        /**
        * First node in the list
        * @type {Object}
        * @private
        */
        public firstNode: ILinkedListNode<T>;
        /**
        * Last node in the list
        * @type {Object}
        * @private
        */
        private lastNode;
        /**
        * Number of elements in the list
        * @type {number}
        * @private
        */
        private nElements;
        /**
        * Creates an empty Linked List.
        * @class A linked list is a data structure consisting of a group of nodes
        * which together represent a sequence.
        * @constructor
        */
        constructor();
        /**
        * Adds an element to this list.
        * @param {Object} item element to be added.
        * @param {number=} index optional index to add the element. If no index is specified
        * the element is added to the end of this list.
        * @return {boolean} true if the element was added or false if the index is invalid
        * or if the element is undefined.
        */
        public add(item: T, index?: number): boolean;
        /**
        * Returns the first element in this list.
        * @return {*} the first element of the list or undefined if the list is
        * empty.
        */
        public first(): T;
        /**
        * Returns the last element in this list.
        * @return {*} the last element in the list or undefined if the list is
        * empty.
        */
        public last(): T;
        /**
        * Returns the element at the specified position in this list.
        * @param {number} index desired index.
        * @return {*} the element at the given index or undefined if the index is
        * out of bounds.
        */
        public elementAtIndex(index: number): T;
        /**
        * Returns the index in this list of the first occurrence of the
        * specified element, or -1 if the List does not contain this element.
        * <p>If the elements inside this list are
        * not comparable with the === operator a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName = function(pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} item element to search for.
        * @param {function(Object,Object):boolean=} equalsFunction Optional
        * function used to check if two elements are equal.
        * @return {number} the index in this list of the first occurrence
        * of the specified element, or -1 if this list does not contain the
        * element.
        */
        public indexOf(item: T, equalsFunction?: IEqualsFunction<T>): number;
        /**
        * Returns true if this list contains the specified element.
        * <p>If the elements inside the list are
        * not comparable with the === operator a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName = function(pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} item element to search for.
        * @param {function(Object,Object):boolean=} equalsFunction Optional
        * function used to check if two elements are equal.
        * @return {boolean} true if this list contains the specified element, false
        * otherwise.
        */
        public contains(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * Removes the first occurrence of the specified element in this list.
        * <p>If the elements inside the list are
        * not comparable with the === operator a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName = function(pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} item element to be removed from this list, if present.
        * @return {boolean} true if the list contained the specified element.
        */
        public remove(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * Removes all of the elements from this list.
        */
        public clear(): void;
        /**
        * Returns true if this list is equal to the given list.
        * Two lists are equal if they have the same elements in the same order.
        * @param {LinkedList} other the other list.
        * @param {function(Object,Object):boolean=} equalsFunction optional
        * function used to check if two elements are equal. If the elements in the lists
        * are custom objects you should provide a function, otherwise
        * the === operator is used to check equality between elements.
        * @return {boolean} true if this list is equal to the given list.
        */
        public equals(other: LinkedList<T>, equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * @private
        */
        private equalsAux(n1, n2, eqF);
        /**
        * Removes the element at the specified position in this list.
        * @param {number} index given index.
        * @return {*} removed element or undefined if the index is out of bounds.
        */
        public removeElementAtIndex(index: number): T;
        /**
        * Executes the provided function once for each element present in this list in order.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        public forEach(callback: (item: T) => boolean): void;
        /**
        * Reverses the order of the elements in this linked list (makes the last
        * element first, and the first element last).
        */
        public reverse(): void;
        /**
        * Returns an array containing all of the elements in this list in proper
        * sequence.
        * @return {Array.<*>} an array containing all of the elements in this list,
        * in proper sequence.
        */
        public toArray(): T[];
        /**
        * Returns the number of elements in this list.
        * @return {number} the number of elements in this list.
        */
        public size(): number;
        /**
        * Returns true if this list contains no elements.
        * @return {boolean} true if this list contains no elements.
        */
        public isEmpty(): boolean;
        public toString(): string;
        /**
        * @private
        */
        private nodeAtIndex(index);
        /**
        * @private
        */
        private createNode(item);
    }
    class Dictionary<K, V> {
        /**
        * Object holding the key-value pairs.
        * @type {Object}
        * @private
        */
        private table;
        /**
        * Number of elements in the list.
        * @type {number}
        * @private
        */
        private nElements;
        /**
        * Function used to convert keys to strings.
        * @type {function(Object):string}
        * @private
        */
        private toStr;
        /**
        * Creates an empty dictionary.
        * @class <p>Dictionaries map keys to values; each key can map to at most one value.
        * This implementation accepts any kind of objects as keys.</p>
        *
        * <p>If the keys are custom objects a function which converts keys to unique
        * strings must be provided. Example:</p>
        * <pre>
        * function petToString(pet) {
        *  return pet.name;
        * }
        * </pre>
        * @constructor
        * @param {function(Object):string=} toStrFunction optional function used
        * to convert keys to strings. If the keys aren't strings or if toString()
        * is not appropriate, a custom function which receives a key and returns a
        * unique string must be provided.
        */
        constructor(toStrFunction?: (key: K) => string);
        /**
        * Returns the value to which this dictionary maps the specified key.
        * Returns undefined if this dictionary contains no mapping for this key.
        * @param {Object} key key whose associated value is to be returned.
        * @return {*} the value to which this dictionary maps the specified key or
        * undefined if the map contains no mapping for this key.
        */
        public getValue(key: K): V;
        /**
        * Associates the specified value with the specified key in this dictionary.
        * If the dictionary previously contained a mapping for this key, the old
        * value is replaced by the specified value.
        * @param {Object} key key with which the specified value is to be
        * associated.
        * @param {Object} value value to be associated with the specified key.
        * @return {*} previous value associated with the specified key, or undefined if
        * there was no mapping for the key or if the key/value are undefined.
        */
        public setValue(key: K, value: V): V;
        /**
        * Removes the mapping for this key from this dictionary if it is present.
        * @param {Object} key key whose mapping is to be removed from the
        * dictionary.
        * @return {*} previous value associated with specified key, or undefined if
        * there was no mapping for key.
        */
        public remove(key: K): V;
        /**
        * Returns an array containing all of the keys in this dictionary.
        * @return {Array} an array containing all of the keys in this dictionary.
        */
        public keys(): K[];
        /**
        * Returns an array containing all of the values in this dictionary.
        * @return {Array} an array containing all of the values in this dictionary.
        */
        public values(): V[];
        /**
        * Executes the provided function once for each key-value pair
        * present in this dictionary.
        * @param {function(Object,Object):*} callback function to execute, it is
        * invoked with two arguments: key and value. To break the iteration you can
        * optionally return false.
        */
        public forEach(callback: (key: K, value: V) => any): void;
        /**
        * Returns true if this dictionary contains a mapping for the specified key.
        * @param {Object} key key whose presence in this dictionary is to be
        * tested.
        * @return {boolean} true if this dictionary contains a mapping for the
        * specified key.
        */
        public containsKey(key: K): boolean;
        /**
        * Removes all mappings from this dictionary.
        * @this {Collections.Dictionary}
        */
        public clear(): void;
        /**
        * Returns the number of keys in this dictionary.
        * @return {number} the number of key-value mappings in this dictionary.
        */
        public size(): number;
        /**
        * Returns true if this dictionary contains no mappings.
        * @return {boolean} true if this dictionary contains no mappings.
        */
        public isEmpty(): boolean;
        public toString(): string;
    }
    class MultiDictionary<K, V> {
        private dict;
        private equalsF;
        private allowDuplicate;
        /**
        * Creates an empty multi dictionary.
        * @class <p>A multi dictionary is a special kind of dictionary that holds
        * multiple values against each key. Setting a value into the dictionary will
        * add the value to an array at that key. Getting a key will return an array,
        * holding all the values set to that key.
        * You can configure to allow duplicates in the values.
        * This implementation accepts any kind of objects as keys.</p>
        *
        * <p>If the keys are custom objects a function which converts keys to strings must be
        * provided. Example:</p>
        *
        * <pre>
        * function petToString(pet) {
        *  return pet.name;
        * }
        * </pre>
        * <p>If the values are custom objects a function to check equality between values
        * must be provided. Example:</p>
        *
        * <pre>
        * function petsAreEqualByAge(pet1,pet2) {
        *  return pet1.age===pet2.age;
        * }
        * </pre>
        * @constructor
        * @param {function(Object):string=} toStrFunction optional function
        * to convert keys to strings. If the keys aren't strings or if toString()
        * is not appropriate, a custom function which receives a key and returns a
        * unique string must be provided.
        * @param {function(Object,Object):boolean=} valuesEqualsFunction optional
        * function to check if two values are equal.
        *
        * @param allowDuplicateValues
        */
        constructor(toStrFunction?: (key: K) => string, valuesEqualsFunction?: IEqualsFunction<V>, allowDuplicateValues?: boolean);
        /**
        * Returns an array holding the values to which this dictionary maps
        * the specified key.
        * Returns an empty array if this dictionary contains no mappings for this key.
        * @param {Object} key key whose associated values are to be returned.
        * @return {Array} an array holding the values to which this dictionary maps
        * the specified key.
        */
        public getValue(key: K): V[];
        /**
        * Adds the value to the array associated with the specified key, if
        * it is not already present.
        * @param {Object} key key with which the specified value is to be
        * associated.
        * @param {Object} value the value to add to the array at the key
        * @return {boolean} true if the value was not already associated with that key.
        */
        public setValue(key: K, value: V): boolean;
        /**
        * Removes the specified values from the array of values associated with the
        * specified key. If a value isn't given, all values associated with the specified
        * key are removed.
        * @param {Object} key key whose mapping is to be removed from the
        * dictionary.
        * @param {Object=} value optional argument to specify the value to remove
        * from the array associated with the specified key.
        * @return {*} true if the dictionary changed, false if the key doesn't exist or
        * if the specified value isn't associated with the specified key.
        */
        public remove(key: K, value?: V): boolean;
        /**
        * Returns an array containing all of the keys in this dictionary.
        * @return {Array} an array containing all of the keys in this dictionary.
        */
        public keys(): K[];
        /**
        * Returns an array containing all of the values in this dictionary.
        * @return {Array} an array containing all of the values in this dictionary.
        */
        public values(): V[];
        /**
        * Returns true if this dictionary at least one value associatted the specified key.
        * @param {Object} key key whose presence in this dictionary is to be
        * tested.
        * @return {boolean} true if this dictionary at least one value associatted
        * the specified key.
        */
        public containsKey(key: K): boolean;
        /**
        * Removes all mappings from this dictionary.
        */
        public clear(): void;
        /**
        * Returns the number of keys in this dictionary.
        * @return {number} the number of key-value mappings in this dictionary.
        */
        public size(): number;
        /**
        * Returns true if this dictionary contains no mappings.
        * @return {boolean} true if this dictionary contains no mappings.
        */
        public isEmpty(): boolean;
    }
    class Heap<T> {
        /**
        * Array used to store the elements od the heap.
        * @type {Array.<Object>}
        * @private
        */
        private data;
        /**
        * Function used to compare elements.
        * @type {function(Object,Object):number}
        * @private
        */
        private compare;
        /**
        * Creates an empty Heap.
        * @class
        * <p>A heap is a binary tree, where the nodes maintain the heap property:
        * each node is smaller than each of its children and therefore a MinHeap
        * This implementation uses an array to store elements.</p>
        * <p>If the inserted elements are custom objects a compare function must be provided,
        *  at construction time, otherwise the <=, === and >= operators are
        * used to compare elements. Example:</p>
        *
        * <pre>
        * function compare(a, b) {
        *  if (a is less than b by some ordering criterion) {
        *     return -1;
        *  } if (a is greater than b by the ordering criterion) {
        *     return 1;
        *  }
        *  // a must be equal to b
        *  return 0;
        * }
        * </pre>
        *
        * <p>If a Max-Heap is wanted (greater elements on top) you can a provide a
        * reverse compare function to accomplish that behavior. Example:</p>
        *
        * <pre>
        * function reverseCompare(a, b) {
        *  if (a is less than b by some ordering criterion) {
        *     return 1;
        *  } if (a is greater than b by the ordering criterion) {
        *     return -1;
        *  }
        *  // a must be equal to b
        *  return 0;
        * }
        * </pre>
        *
        * @constructor
        * @param {function(Object,Object):number=} compareFunction optional
        * function used to compare two elements. Must return a negative integer,
        * zero, or a positive integer as the first argument is less than, equal to,
        * or greater than the second.
        */
        constructor(compareFunction?: ICompareFunction<T>);
        /**
        * Returns the index of the left child of the node at the given index.
        * @param {number} nodeIndex The index of the node to get the left child
        * for.
        * @return {number} The index of the left child.
        * @private
        */
        private leftChildIndex(nodeIndex);
        /**
        * Returns the index of the right child of the node at the given index.
        * @param {number} nodeIndex The index of the node to get the right child
        * for.
        * @return {number} The index of the right child.
        * @private
        */
        private rightChildIndex(nodeIndex);
        /**
        * Returns the index of the parent of the node at the given index.
        * @param {number} nodeIndex The index of the node to get the parent for.
        * @return {number} The index of the parent.
        * @private
        */
        private parentIndex(nodeIndex);
        /**
        * Returns the index of the smaller child node (if it exists).
        * @param {number} leftChild left child index.
        * @param {number} rightChild right child index.
        * @return {number} the index with the minimum value or -1 if it doesn't
        * exists.
        * @private
        */
        private minIndex(leftChild, rightChild);
        /**
        * Moves the node at the given index up to its proper place in the heap.
        * @param {number} index The index of the node to move up.
        * @private
        */
        private siftUp(index);
        /**
        * Moves the node at the given index down to its proper place in the heap.
        * @param {number} nodeIndex The index of the node to move down.
        * @private
        */
        private siftDown(nodeIndex);
        /**
        * Retrieves but does not remove the root element of this heap.
        * @return {*} The value at the root of the heap. Returns undefined if the
        * heap is empty.
        */
        public peek(): T;
        /**
        * Adds the given element into the heap.
        * @param {*} element the element.
        * @return true if the element was added or fals if it is undefined.
        */
        public add(element: T): boolean;
        /**
        * Retrieves and removes the root element of this heap.
        * @return {*} The value removed from the root of the heap. Returns
        * undefined if the heap is empty.
        */
        public removeRoot(): T;
        /**
        * Returns true if this heap contains the specified element.
        * @param {Object} element element to search for.
        * @return {boolean} true if this Heap contains the specified element, false
        * otherwise.
        */
        public contains(element: T): boolean;
        /**
        * Returns the number of elements in this heap.
        * @return {number} the number of elements in this heap.
        */
        public size(): number;
        /**
        * Checks if this heap is empty.
        * @return {boolean} true if and only if this heap contains no items; false
        * otherwise.
        */
        public isEmpty(): boolean;
        /**
        * Removes all of the elements from this heap.
        */
        public clear(): void;
        /**
        * Executes the provided function once for each element present in this heap in
        * no particular order.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        public forEach(callback: (item: T) => boolean): void;
    }
    class Stack<T> {
        /**
        * List containing the elements.
        * @type Collections.LinkedList
        * @private
        */
        private list;
        /**
        * Creates an empty Stack.
        * @class A Stack is a Last-In-First-Out (LIFO) data structure, the last
        * element added to the stack will be the first one to be removed. This
        * implementation uses a linked list as a container.
        * @constructor
        */
        constructor();
        /**
        * Pushes an item onto the top of this stack.
        * @param {Object} elem the element to be pushed onto this stack.
        * @return {boolean} true if the element was pushed or false if it is undefined.
        */
        public push(elem: T): boolean;
        /**
        * Pushes an item onto the top of this stack.
        * @param {Object} elem the element to be pushed onto this stack.
        * @return {boolean} true if the element was pushed or false if it is undefined.
        */
        public add(elem: T): boolean;
        /**
        * Removes the object at the top of this stack and returns that object.
        * @return {*} the object at the top of this stack or undefined if the
        * stack is empty.
        */
        public pop(): T;
        /**
        * Looks at the object at the top of this stack without removing it from the
        * stack.
        * @return {*} the object at the top of this stack or undefined if the
        * stack is empty.
        */
        public peek(): T;
        /**
        * Returns the number of elements in this stack.
        * @return {number} the number of elements in this stack.
        */
        public size(): number;
        /**
        * Returns true if this stack contains the specified element.
        * <p>If the elements inside this stack are
        * not comparable with the === operator, a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName (pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} elem element to search for.
        * @param {function(Object,Object):boolean=} equalsFunction optional
        * function to check if two elements are equal.
        * @return {boolean} true if this stack contains the specified element,
        * false otherwise.
        */
        public contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * Checks if this stack is empty.
        * @return {boolean} true if and only if this stack contains no items; false
        * otherwise.
        */
        public isEmpty(): boolean;
        /**
        * Removes all of the elements from this stack.
        */
        public clear(): void;
        /**
        * Executes the provided function once for each element present in this stack in
        * LIFO order.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        public forEach(callback: ILoopFunction<T>): void;
    }
    class Queue<T> {
        /**
        * List containing the elements.
        * @type Collections.LinkedList
        * @private
        */
        private list;
        /**
        * Creates an empty queue.
        * @class A queue is a First-In-First-Out (FIFO) data structure, the first
        * element added to the queue will be the first one to be removed. This
        * implementation uses a linked list as a container.
        * @constructor
        */
        constructor();
        /**
        * Inserts the specified element into the end of this queue.
        * @param {Object} elem the element to insert.
        * @return {boolean} true if the element was inserted, or false if it is undefined.
        */
        public enqueue(elem: T): boolean;
        /**
        * Inserts the specified element into the end of this queue.
        * @param {Object} elem the element to insert.
        * @return {boolean} true if the element was inserted, or false if it is undefined.
        */
        public add(elem: T): boolean;
        /**
        * Retrieves and removes the head of this queue.
        * @return {*} the head of this queue, or undefined if this queue is empty.
        */
        public dequeue(): T;
        /**
        * Retrieves, but does not remove, the head of this queue.
        * @return {*} the head of this queue, or undefined if this queue is empty.
        */
        public peek(): T;
        /**
        * Returns the number of elements in this queue.
        * @return {number} the number of elements in this queue.
        */
        public size(): number;
        /**
        * Returns true if this queue contains the specified element.
        * <p>If the elements inside this stack are
        * not comparable with the === operator, a custom equals function should be
        * provided to perform searches, the function must receive two arguments and
        * return true if they are equal, false otherwise. Example:</p>
        *
        * <pre>
        * var petsAreEqualByName (pet1, pet2) {
        *  return pet1.name === pet2.name;
        * }
        * </pre>
        * @param {Object} elem element to search for.
        * @param {function(Object,Object):boolean=} equalsFunction optional
        * function to check if two elements are equal.
        * @return {boolean} true if this queue contains the specified element,
        * false otherwise.
        */
        public contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        /**
        * Checks if this queue is empty.
        * @return {boolean} true if and only if this queue contains no items; false
        * otherwise.
        */
        public isEmpty(): boolean;
        /**
        * Removes all of the elements from this queue.
        */
        public clear(): void;
        /**
        * Executes the provided function once for each element present in this queue in
        * FIFO order.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        public forEach(callback: ILoopFunction<T>): void;
    }
    class PriorityQueue<T> {
        private heap;
        /**
        * Creates an empty priority queue.
        * @class <p>In a priority queue each element is associated with a "priority",
        * elements are dequeued in highest-priority-first order (the elements with the
        * highest priority are dequeued first). Priority Queues are implemented as heaps.
        * If the inserted elements are custom objects a compare function must be provided,
        * otherwise the <=, === and >= operators are used to compare object priority.</p>
        * <pre>
        * function compare(a, b) {
        *  if (a is less than b by some ordering criterion) {
        *     return -1;
        *  } if (a is greater than b by the ordering criterion) {
        *     return 1;
        *  }
        *  // a must be equal to b
        *  return 0;
        * }
        * </pre>
        * @constructor
        * @param {function(Object,Object):number=} compareFunction optional
        * function used to compare two element priorities. Must return a negative integer,
        * zero, or a positive integer as the first argument is less than, equal to,
        * or greater than the second.
        */
        constructor(compareFunction?: ICompareFunction<T>);
        /**
        * Inserts the specified element into this priority queue.
        * @param {Object} element the element to insert.
        * @return {boolean} true if the element was inserted, or false if it is undefined.
        */
        public enqueue(element: T): boolean;
        /**
        * Inserts the specified element into this priority queue.
        * @param {Object} element the element to insert.
        * @return {boolean} true if the element was inserted, or false if it is undefined.
        */
        public add(element: T): boolean;
        /**
        * Retrieves and removes the highest priority element of this queue.
        * @return {*} the the highest priority element of this queue,
        *  or undefined if this queue is empty.
        */
        public dequeue(): T;
        /**
        * Retrieves, but does not remove, the highest priority element of this queue.
        * @return {*} the highest priority element of this queue, or undefined if this queue is empty.
        */
        public peek(): T;
        /**
        * Returns true if this priority queue contains the specified element.
        * @param {Object} element element to search for.
        * @return {boolean} true if this priority queue contains the specified element,
        * false otherwise.
        */
        public contains(element: T): boolean;
        /**
        * Checks if this priority queue is empty.
        * @return {boolean} true if and only if this priority queue contains no items; false
        * otherwise.
        */
        public isEmpty(): boolean;
        /**
        * Returns the number of elements in this priority queue.
        * @return {number} the number of elements in this priority queue.
        */
        public size(): number;
        /**
        * Removes all of the elements from this priority queue.
        */
        public clear(): void;
        /**
        * Executes the provided function once for each element present in this queue in
        * no particular order.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        public forEach(callback: ILoopFunction<T>): void;
    }
    class Set<T> {
        private dictionary;
        /**
        * Creates an empty set.
        * @class <p>A set is a data structure that contains no duplicate items.</p>
        * <p>If the inserted elements are custom objects a function
        * which converts elements to strings must be provided. Example:</p>
        *
        * <pre>
        * function petToString(pet) {
        *  return pet.name;
        * }
        * </pre>
        *
        * @constructor
        * @param {function(Object):string=} toStringFunction optional function used
        * to convert elements to strings. If the elements aren't strings or if toString()
        * is not appropriate, a custom function which receives a onject and returns a
        * unique string must be provided.
        */
        constructor(toStringFunction?: (item: T) => string);
        /**
        * Returns true if this set contains the specified element.
        * @param {Object} element element to search for.
        * @return {boolean} true if this set contains the specified element,
        * false otherwise.
        */
        public contains(element: T): boolean;
        /**
        * Adds the specified element to this set if it is not already present.
        * @param {Object} element the element to insert.
        * @return {boolean} true if this set did not already contain the specified element.
        */
        public add(element: T): boolean;
        /**
        * Performs an intersecion between this an another set.
        * Removes all values that are not present this set and the given set.
        * @param {Collections.Set} otherSet other set.
        */
        public intersection(otherSet: Set<T>): void;
        /**
        * Performs a union between this an another set.
        * Adds all values from the given set to this set.
        * @param {Collections.Set} otherSet other set.
        */
        public union(otherSet: Set<T>): void;
        /**
        * Performs a difference between this an another set.
        * Removes from this set all the values that are present in the given set.
        * @param {Collections.Set} otherSet other set.
        */
        public difference(otherSet: Set<T>): void;
        /**
        * Checks whether the given set contains all the elements in this set.
        * @param {Collections.Set} otherSet other set.
        * @return {boolean} true if this set is a subset of the given set.
        */
        public isSubsetOf(otherSet: Set<T>): boolean;
        /**
        * Removes the specified element from this set if it is present.
        * @return {boolean} true if this set contained the specified element.
        */
        public remove(element: T): boolean;
        /**
        * Executes the provided function once for each element
        * present in this set.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one arguments: the element. To break the iteration you can
        * optionally return false.
        */
        public forEach(callback: ILoopFunction<T>): void;
        /**
        * Returns an array containing all of the elements in this set in arbitrary order.
        * @return {Array} an array containing all of the elements in this set.
        */
        public toArray(): T[];
        /**
        * Returns true if this set contains no elements.
        * @return {boolean} true if this set contains no elements.
        */
        public isEmpty(): boolean;
        /**
        * Returns the number of elements in this set.
        * @return {number} the number of elements in this set.
        */
        public size(): number;
        /**
        * Removes all of the elements from this set.
        */
        public clear(): void;
        public toString(): string;
    }
    class Bag<T> {
        private toStrF;
        private dictionary;
        private nElements;
        /**
        * Creates an empty bag.
        * @class <p>A bag is a special kind of set in which members are
        * allowed to appear more than once.</p>
        * <p>If the inserted elements are custom objects a function
        * which converts elements to unique strings must be provided. Example:</p>
        *
        * <pre>
        * function petToString(pet) {
        *  return pet.name;
        * }
        * </pre>
        *
        * @constructor
        * @param {function(Object):string=} toStrFunction optional function used
        * to convert elements to strings. If the elements aren't strings or if toString()
        * is not appropriate, a custom function which receives an object and returns a
        * unique string must be provided.
        */
        constructor(toStrFunction?: (item: T) => string);
        /**
        * Adds nCopies of the specified object to this bag.
        * @param {Object} element element to add.
        * @param {number=} nCopies the number of copies to add, if this argument is
        * undefined 1 copy is added.
        * @return {boolean} true unless element is undefined.
        */
        public add(element: T, nCopies?: number): boolean;
        /**
        * Counts the number of copies of the specified object in this bag.
        * @param {Object} element the object to search for..
        * @return {number} the number of copies of the object, 0 if not found
        */
        public count(element: T): number;
        /**
        * Returns true if this bag contains the specified element.
        * @param {Object} element element to search for.
        * @return {boolean} true if this bag contains the specified element,
        * false otherwise.
        */
        public contains(element: T): boolean;
        /**
        * Removes nCopies of the specified object to this bag.
        * If the number of copies to remove is greater than the actual number
        * of copies in the Bag, all copies are removed.
        * @param {Object} element element to remove.
        * @param {number=} nCopies the number of copies to remove, if this argument is
        * undefined 1 copy is removed.
        * @return {boolean} true if at least 1 element was removed.
        */
        public remove(element: T, nCopies?: number): boolean;
        /**
        * Returns an array containing all of the elements in this big in arbitrary order,
        * including multiple copies.
        * @return {Array} an array containing all of the elements in this bag.
        */
        public toArray(): T[];
        /**
        * Returns a set of unique elements in this bag.
        * @return {Collections.Set<T>} a set of unique elements in this bag.
        */
        public toSet(): Set<T>;
        /**
        * Executes the provided function once for each element
        * present in this bag, including multiple copies.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element. To break the iteration you can
        * optionally return false.
        */
        public forEach(callback: ILoopFunction<T>): void;
        /**
        * Returns the number of elements in this bag.
        * @return {number} the number of elements in this bag.
        */
        public size(): number;
        /**
        * Returns true if this bag contains no elements.
        * @return {boolean} true if this bag contains no elements.
        */
        public isEmpty(): boolean;
        /**
        * Removes all of the elements from this bag.
        */
        public clear(): void;
    }
    class BSTree<T> {
        private root;
        private compare;
        private nElements;
        /**
        * Creates an empty binary search tree.
        * @class <p>A binary search tree is a binary tree in which each
        * internal node stores an element such that the elements stored in the
        * left subtree are less than it and the elements
        * stored in the right subtree are greater.</p>
        * <p>Formally, a binary search tree is a node-based binary tree data structure which
        * has the following properties:</p>
        * <ul>
        * <li>The left subtree of a node contains only nodes with elements less
        * than the node's element</li>
        * <li>The right subtree of a node contains only nodes with elements greater
        * than the node's element</li>
        * <li>Both the left and right subtrees must also be binary search trees.</li>
        * </ul>
        * <p>If the inserted elements are custom objects a compare function must
        * be provided at construction time, otherwise the <=, === and >= operators are
        * used to compare elements. Example:</p>
        * <pre>
        * function compare(a, b) {
        *  if (a is less than b by some ordering criterion) {
        *     return -1;
        *  } if (a is greater than b by the ordering criterion) {
        *     return 1;
        *  }
        *  // a must be equal to b
        *  return 0;
        * }
        * </pre>
        * @constructor
        * @param {function(Object,Object):number=} compareFunction optional
        * function used to compare two elements. Must return a negative integer,
        * zero, or a positive integer as the first argument is less than, equal to,
        * or greater than the second.
        */
        constructor(compareFunction?: ICompareFunction<T>);
        /**
        * Adds the specified element to this tree if it is not already present.
        * @param {Object} element the element to insert.
        * @return {boolean} true if this tree did not already contain the specified element.
        */
        public add(element: T): boolean;
        /**
        * Removes all of the elements from this tree.
        */
        public clear(): void;
        /**
        * Returns true if this tree contains no elements.
        * @return {boolean} true if this tree contains no elements.
        */
        public isEmpty(): boolean;
        /**
        * Returns the number of elements in this tree.
        * @return {number} the number of elements in this tree.
        */
        public size(): number;
        /**
        * Returns true if this tree contains the specified element.
        * @param {Object} element element to search for.
        * @return {boolean} true if this tree contains the specified element,
        * false otherwise.
        */
        public contains(element: T): boolean;
        /**
        * Removes the specified element from this tree if it is present.
        * @return {boolean} true if this tree contained the specified element.
        */
        public remove(element: T): boolean;
        /**
        * Executes the provided function once for each element present in this tree in
        * in-order.
        * @param {function(Object):*} callback function to execute, it is invoked with one
        * argument: the element value, to break the iteration you can optionally return false.
        */
        public inorderTraversal(callback: ILoopFunction<T>): void;
        /**
        * Executes the provided function once for each element present in this tree in pre-order.
        * @param {function(Object):*} callback function to execute, it is invoked with one
        * argument: the element value, to break the iteration you can optionally return false.
        */
        public preorderTraversal(callback: ILoopFunction<T>): void;
        /**
        * Executes the provided function once for each element present in this tree in post-order.
        * @param {function(Object):*} callback function to execute, it is invoked with one
        * argument: the element value, to break the iteration you can optionally return false.
        */
        public postorderTraversal(callback: ILoopFunction<T>): void;
        /**
        * Executes the provided function once for each element present in this tree in
        * level-order.
        * @param {function(Object):*} callback function to execute, it is invoked with one
        * argument: the element value, to break the iteration you can optionally return false.
        */
        public levelTraversal(callback: ILoopFunction<T>): void;
        /**
        * Returns the minimum element of this tree.
        * @return {*} the minimum element of this tree or undefined if this tree is
        * is empty.
        */
        public minimum(): T;
        /**
        * Returns the maximum element of this tree.
        * @return {*} the maximum element of this tree or undefined if this tree is
        * is empty.
        */
        public maximum(): T;
        /**
        * Executes the provided function once for each element present in this tree in inorder.
        * Equivalent to inorderTraversal.
        * @param {function(Object):*} callback function to execute, it is
        * invoked with one argument: the element value, to break the iteration you can
        * optionally return false.
        */
        public forEach(callback: ILoopFunction<T>): void;
        /**
        * Returns an array containing all of the elements in this tree in in-order.
        * @return {Array} an array containing all of the elements in this tree in in-order.
        */
        public toArray(): T[];
        /**
        * Returns the height of this tree.
        * @return {number} the height of this tree or -1 if is empty.
        */
        public height(): number;
        /**
        * @private
        */
        private searchNode(node, element);
        /**
        * @private
        */
        private transplant(n1, n2);
        /**
        * @private
        */
        private removeNode(node);
        /**
        * @private
        */
        private inorderTraversalAux(node, callback, signal);
        /**
        * @private
        */
        private levelTraversalAux(node, callback);
        /**
        * @private
        */
        private preorderTraversalAux(node, callback, signal);
        /**
        * @private
        */
        private postorderTraversalAux(node, callback, signal);
        /**
        * @private
        */
        private minimumAux(node);
        /**
        * @private
        */
        private maximumAux(node);
        /**
        * @private
        */
        private heightAux(node);
        private insertNode(node);
        /**
        * @private
        */
        private createNode(element);
    }
}
declare class Base64 {
    private _keyStr;
    public encode(input: string): string;
    public decode(input: string): string;
    public utf8Encode(value: string): string;
    public utf8Decode(utftext: string): string;
}
interface String {
    format(...replacements: string[]): string;
    appendDictionary(values: Collections.Dictionary<string, Object>): string;
    endsWith(value: string): boolean;
}
declare class ColorKeys {
    public colorString: string;
    public appendColors(stringBuilder: string, xpoUrlColors: XpoUrlObject[]): string;
}
declare class DesignKey {
    private keyList;
    private americanCulture;
    public addToList(value: any, omitIfDefault?: boolean): void;
    public addDouble(value: number, omitIfDefault?: boolean): void;
    public getUrlValue(): string;
    public getValues(designs: XpoUrlObject[]): string;
    public addEmpty(): void;
    public isEmpty(): boolean;
}
declare class ContrastDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class DesignKeys {
    private designKeys;
    constructor();
    public appendDesigns(stringBuilder: string, xpoUrlDesigns: XpoUrlObject[]): string;
}
declare class DropXDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class DropYDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class EntityNameDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
    public convertToBase64UrlString(value: string): string;
}
declare class FlipDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class GeneralKeys {
    private entityName;
    private width;
    private height;
    private backgroundColor;
    private designCaching;
    private resizeMethod;
    private textureRepeat;
    private outputQuality;
    private imageType;
    private outputType;
    private sceneThumbnailObjectNumber;
    private highlightObject;
    private caching;
    private coords;
    private watermark;
    private frame;
    public queryStringFormat: string;
    public appendRequest(stringBuilder: string, request: XpoUrlRequest): string;
    private getQueryStringValue(key, value);
    private getCachingMethod(request);
    private getRepeatMethod(request);
    private getFormat(imageType);
    private getResizeMethod(request);
}
declare class GlossDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class HeightDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class OverlayKey {
    private keyList;
    private americanCulture;
    public addToList(value: any, omitIfDefault?: boolean): void;
    public addDouble(value: number, omitIfDefault?: boolean): void;
    public getUrlValue(): string;
    public getValues(designs: XpoUrlOverlay[]): string;
    public addEmpty(): void;
    public isEmpty(): boolean;
}
declare class OverlayKeys {
    private overlayKeys;
    constructor();
    public appendOverlays(stringBuilder: string, xpoUrlOverlays: XpoUrlOverlay[]): string;
}
declare class LocationOverlayKey extends OverlayKey {
    public getValues(overlays: XpoUrlOverlay[]): string;
}
declare class ModeOverlayKey extends OverlayKey {
    public getValues(overlays: XpoUrlOverlay[]): string;
}
declare class NameOverlayKey extends OverlayKey {
    public getValues(overlays: XpoUrlOverlay[]): string;
    public convertToBase64UrlString(value: string): string;
}
declare class OperationOverlayKey extends OverlayKey {
    public getValues(overlays: XpoUrlOverlay[]): string;
}
declare class XpoUrlGenerator implements UrlGeneratorModule.IXpoUrlGenerator {
    public getUrl(request: XpoUrlRequest): string;
    public getImageUrl(request: XpoImageUrlRequest): string;
    public getCoordsUrl(request: XpoCoordinatesUrlRequest): string;
    public getXpoBaseUrl(urlRequest: XpoUrlRequest): string;
}
declare class PlacingPointXDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class PlacingPointYDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class RepeatDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class RotationDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class TimeOverlayKey extends OverlayKey {
    public getValues(overlays: XpoUrlOverlay[]): string;
}
declare class WidthDesignKey extends DesignKey {
    public getValues(designs: XpoUrlObject[]): string;
}
declare class FluentXpoUrlColor {
    private xpoUrlColor;
    constructor(color: string);
    public getXpoUrlColor(): XpoUrlColor;
}
declare class FluentXpoUrlDesign {
    public xpoUrlDesign: XpoUrlDesign;
    constructor(fileName: string);
    public getXpoUrlDesign(): XpoUrlDesign;
    public setSameIndex(index: number): FluentXpoUrlDesign;
    public setType(type: UrlGeneratorModule.XpoUrlObjectTypes): FluentXpoUrlDesign;
    public setWidth(width: number): FluentXpoUrlDesign;
    public setHeight(height: number): FluentXpoUrlDesign;
    public setGloss(gloss: number): FluentXpoUrlDesign;
    public setContrast(contrast: number): FluentXpoUrlDesign;
    public setDropX(dropX: number): FluentXpoUrlDesign;
    public setDropY(dropY: number): FluentXpoUrlDesign;
    public setPlacingPointX(placingPointX: number): FluentXpoUrlDesign;
    public setPlacingPointY(placingPointY: number): FluentXpoUrlDesign;
    public setRotation(rotation: number): FluentXpoUrlDesign;
    public setFlip(flip: boolean): FluentXpoUrlDesign;
    public setRepeat(repeat: boolean): FluentXpoUrlDesign;
}
declare class FluentXpoUrlFactory implements UrlGeneratorModule.IFluentXpoUrlFactory {
    public createFluentUrlGenerator(generator: UrlGeneratorModule.IXpoUrlGenerator, urlType: UrlGeneratorModule.FluentXpoUrlType): FluentXpoUrlGenerator;
    public getUrlRequest(urltype: UrlGeneratorModule.FluentXpoUrlType): XpoImageUrlRequest;
}
declare class FluentXpoUrlGenerator implements UrlGeneratorModule.IFluentXpoUrlGenerator {
    public generator: UrlGeneratorModule.IXpoUrlGenerator;
    public request: XpoUrlRequest;
    constructor(generator: UrlGeneratorModule.IXpoUrlGenerator, request?: XpoUrlRequest);
    private ensureUrlType(urlRequest);
    public setPrimaryKey(primaryKey: string): FluentXpoUrlGenerator;
    public setOutputQuality(outputQuality: number): FluentXpoUrlGenerator;
    public setOutputType(outputType: UrlGeneratorModule.XpoUrlOutputTypes): FluentXpoUrlGenerator;
    public addObject(xpoObject: Function, options: any): FluentXpoUrlGenerator;
    public addTemplateParameter(index: number, parameterValue: string): FluentXpoUrlGenerator;
    public addOverlay(xpoOverlay: Function, options: any): FluentXpoUrlGenerator;
    public setEntityType(fileType: UrlGeneratorModule.XpoUrlFileTypes): FluentXpoUrlGenerator;
    public setWidth(width: number): FluentXpoUrlGenerator;
    public setHeight(height: number): FluentXpoUrlGenerator;
    public setResizeMethod(resizeMethod: UrlGeneratorModule.XpoUrlResizeMethods): FluentXpoUrlGenerator;
    public setImageType(type: UrlGeneratorModule.XpoUrlImageTypes): FluentXpoUrlGenerator;
    public setDebug(debug: boolean): FluentXpoUrlGenerator;
    public setBackgroundColor(colorString: string): FluentXpoUrlGenerator;
    public setCaching(cache: boolean): FluentXpoUrlGenerator;
    public setDesignCaching(cache: boolean): FluentXpoUrlGenerator;
    public setHighlightObject(objectNumber: number): FluentXpoUrlGenerator;
    public setTransparencyColor(colorString: string): FluentXpoUrlGenerator;
    public setSceneThumbnailObjectNumber(objectNumber: number): FluentXpoUrlGenerator;
    public setAllColor(colorString: string): FluentXpoUrlGenerator;
    public setPrefillCaching(cache: boolean): FluentXpoUrlGenerator;
    public setTemplateName(name: string): FluentXpoUrlGenerator;
    public setAbsoluteUrl(absoluteUrl: string): FluentXpoUrlGenerator;
    public setWatermarkImage(watermarkImageName: string): FluentXpoUrlGenerator;
    public addCustom(key: string, value: Object): FluentXpoUrlGenerator;
    public setFrame(frame: number): FluentXpoUrlGenerator;
    public getUrl(): string;
}
declare class FluentXpoUrlObject {
    private xpoObject;
    constructor();
    public getXpoObject(): XpoUrlObject;
    public setIndex(index: number): FluentXpoUrlObject;
    public design(fileName: string): FluentXpoUrlDesign;
    public text(text: string): FluentXpoUrlText;
    public color(color: string): FluentXpoUrlColor;
}
declare class FluentXpoUrlOverlay {
    private xpoUrlOverlay;
    constructor(overlayName?: string);
    public getXpoOverlay(): XpoUrlOverlay;
    public setIndex(index: number): FluentXpoUrlOverlay;
    public setLocation(location: UrlGeneratorModule.XpoUrlOverlayLocations): XpoUrlOverlay;
    public setMode(mode: UrlGeneratorModule.XpoUrlOverlayModes): XpoUrlOverlay;
    public setName(name: string): XpoUrlOverlay;
    public setOperation(operation: UrlGeneratorModule.XpoUrlOverlayOperations): XpoUrlOverlay;
    public setTime(time: UrlGeneratorModule.XpoUrlOverlayTimes): XpoUrlOverlay;
}
declare class FluentXpoUrlText {
    private xpoUrlText;
    constructor(text: string);
    public getXpoUrlText(): XpoUrlText;
    public setFontName(fontName: string): FluentXpoUrlText;
    public setFontSize(fontSize: number): FluentXpoUrlText;
    public setColor(color: string): FluentXpoUrlText;
    public setAlignment(alignment: UrlGeneratorModule.XpoUrlTextAlignment): FluentXpoUrlText;
    public bold(): FluentXpoUrlText;
    public italic(): FluentXpoUrlText;
    public underline(): FluentXpoUrlText;
    public setDropX(dropX: number): FluentXpoUrlText;
    public setDropY(dropY: number): FluentXpoUrlText;
    public setPlacingPointX(placingPointX: number): FluentXpoUrlText;
    public setPlacingPointY(placingPointY: number): FluentXpoUrlText;
    public setRotation(rotation: number): FluentXpoUrlText;
}
declare module UrlGeneratorModule {
    interface IFluentXpoUrlFactory {
        createFluentUrlGenerator(generator: IXpoUrlGenerator, urlType: FluentXpoUrlType): IFluentXpoUrlGenerator;
    }
}
declare module UrlGeneratorModule {
    interface IFluentXpoUrlGenerator {
        setPrimaryKey(primaryKey: string): IFluentXpoUrlGenerator;
        setOutputQuality(outputQuality: number): IFluentXpoUrlGenerator;
        setOutputType(outputType: XpoUrlOutputTypes): IFluentXpoUrlGenerator;
        addObject(xpoObject: Function, options: any): IFluentXpoUrlGenerator;
        addTemplateParameter(index: number, parameterValue: string): IFluentXpoUrlGenerator;
        addOverlay(xpoOverlay: Function, options: any): IFluentXpoUrlGenerator;
        setEntityType(fileType: XpoUrlFileTypes): IFluentXpoUrlGenerator;
        setWidth(width: number): IFluentXpoUrlGenerator;
        setHeight(height: number): IFluentXpoUrlGenerator;
        setResizeMethod(resizeMethod: XpoUrlResizeMethods): IFluentXpoUrlGenerator;
        setImageType(type: XpoUrlImageTypes): IFluentXpoUrlGenerator;
        setDebug(debug: boolean): IFluentXpoUrlGenerator;
        setBackgroundColor(colorString: string): IFluentXpoUrlGenerator;
        setCaching(cache: boolean): IFluentXpoUrlGenerator;
        setDesignCaching(cache: boolean): IFluentXpoUrlGenerator;
        setHighlightObject(objectNumber: number): IFluentXpoUrlGenerator;
        setTransparencyColor(colorString: string): IFluentXpoUrlGenerator;
        setSceneThumbnailObjectNumber(objectNumber: number): IFluentXpoUrlGenerator;
        setAllColor(colorString: string): IFluentXpoUrlGenerator;
        setPrefillCaching(cache: boolean): IFluentXpoUrlGenerator;
        setTemplateName(name: string): IFluentXpoUrlGenerator;
        setAbsoluteUrl(absoluteUrl: string): IFluentXpoUrlGenerator;
        setWatermarkImage(watermarkImageName: string): IFluentXpoUrlGenerator;
        addCustom(key: string, value: Object): IFluentXpoUrlGenerator;
        setFrame(frame: number): IFluentXpoUrlGenerator;
        getUrl(): string;
    }
}
declare module UrlGeneratorModule {
    interface IXpoUrlFactory {
        createUrlGenerator(): IXpoUrlGenerator;
    }
}
declare module UrlGeneratorModule {
    interface IXpoUrlGenerator {
        getUrl(request: XpoUrlRequest): string;
    }
}
declare class XpoUrlColor {
    private color;
    constructor(color: string);
    public getColor(): string;
    public setColor(val: string): void;
}
declare class XpoUrlDesign {
    private index;
    private sameIndex;
    private objectType;
    private entityName;
    private width;
    private height;
    private gloss;
    private contrast;
    private dropX;
    private dropY;
    private placingPointX;
    private placingPointY;
    private rotation;
    private flip;
    private repeat;
    constructor(fileName?: string);
    public getIndex(): number;
    public setIndex(val: number): void;
    public getSameIndex(): number;
    public setSameIndex(val: number): void;
    public getObjectType(): UrlGeneratorModule.XpoUrlObjectTypes;
    public setObjectType(val: UrlGeneratorModule.XpoUrlObjectTypes): void;
    public getEntityName(): string;
    public setEntityName(val: string): void;
    public getWidth(): number;
    public setWidth(val: number): void;
    public getHeight(): number;
    public setHeight(val: number): void;
    public getGloss(): number;
    public setGloss(val: number): void;
    public getContrast(): number;
    public setContrast(val: number): void;
    public getDropX(): number;
    public setDropX(val: number): void;
    public getDropY(): number;
    public setDropY(val: number): void;
    public getPlacingPointX(): number;
    public setPlacingPointX(val: number): void;
    public getPlacingPointY(): number;
    public setPlacingPointY(val: number): void;
    public getRotation(): number;
    public setRotation(val: number): void;
    public getFlip(): boolean;
    public setFlip(val: boolean): void;
    public getRepeat(): boolean;
    public setRepeat(val: boolean): void;
}
declare class XpoUrlObject {
    private index;
    private objectType;
    private text;
    private color;
    private design;
    public getIndex(): number;
    public setIndex(val: number): void;
    public getObjectType(): UrlGeneratorModule.XpoUrlObjectTypes;
    public setObjectType(val: UrlGeneratorModule.XpoUrlObjectTypes): void;
    public getText(): XpoUrlText;
    public setText(val: XpoUrlText): void;
    public getColor(): XpoUrlColor;
    public setColor(val: XpoUrlColor): void;
    public getDesign(): XpoUrlDesign;
    public setDesign(val: XpoUrlDesign): void;
}
declare class XpoUrlOverlay {
    private index;
    private overlayName;
    private overlayMode;
    private overlayTime;
    private overlayOperation;
    private overlayLocation;
    constructor(overlayName?: string);
    public getIndex(): number;
    public setIndex(val: number): void;
    public getOverlayName(): string;
    public setOverlayName(val: string): void;
    public getOverlayMode(): UrlGeneratorModule.XpoUrlOverlayModes;
    public setOverlayMode(val: UrlGeneratorModule.XpoUrlOverlayModes): void;
    public getOverlayTime(): UrlGeneratorModule.XpoUrlOverlayTimes;
    public setOverlayTime(val: UrlGeneratorModule.XpoUrlOverlayTimes): void;
    public getOverlayOperation(): UrlGeneratorModule.XpoUrlOverlayOperations;
    public setOverlayOperation(val: UrlGeneratorModule.XpoUrlOverlayOperations): void;
    public getOverlayLocation(): UrlGeneratorModule.XpoUrlOverlayLocations;
    public setOverlayLocation(val: UrlGeneratorModule.XpoUrlOverlayLocations): void;
}
declare class XpoUrlRequest {
    public primaryKey: string;
    private outputType;
    private outputQuality;
    public objects: XpoUrlObject[];
    public overlays: XpoUrlOverlay[];
    public templateParameters: XpoUrlTemplate[];
    private fileType;
    private width;
    public customParameters: Collections.Dictionary<string, Object>;
    private frame;
    private watermarkImage;
    private absoluteUrl;
    private sceneThumbnailObjectNumber;
    private highlightObject;
    private isEntity;
    private preFillCaching;
    private designCaching;
    private caching;
    private templateName;
    private allColor;
    private transparencyColor;
    private backgroundColor;
    private debug;
    private imageType;
    private resizeMethod;
    private height;
    public urlType: UrlGeneratorModule.UrlTypes;
    constructor();
    public getPrimaryKey(): string;
    public setPrimaryKey(val: string): void;
    public getOutputType(): UrlGeneratorModule.XpoUrlOutputTypes;
    public setOutputType(val: UrlGeneratorModule.XpoUrlOutputTypes): void;
    public getOutputQuality(): number;
    public setOutputQuality(val: number): void;
    public getObjects(): XpoUrlObject[];
    public getTemplateParameters(): XpoUrlTemplate[];
    public getOverlays(): XpoUrlOverlay[];
    public getFileType(): UrlGeneratorModule.XpoUrlFileTypes;
    public setFileType(val: UrlGeneratorModule.XpoUrlFileTypes): void;
    public getWidth(): number;
    public setWidth(val: number): void;
    public getHeight(): number;
    public setHeight(val: number): void;
    public getResizeMethod(): UrlGeneratorModule.XpoUrlResizeMethods;
    public setResizeMethod(val: UrlGeneratorModule.XpoUrlResizeMethods): void;
    public getImageType(): UrlGeneratorModule.XpoUrlImageTypes;
    public setImageType(val: UrlGeneratorModule.XpoUrlImageTypes): void;
    public getDebug(): boolean;
    public setDebug(val: boolean): void;
    public getBackgroundColor(): string;
    public setBackgroundColor(val: string): void;
    public getTransparencyColor(): string;
    public setTransparencyColor(val: string): void;
    public getAllColor(): string;
    public setAllColor(val: string): void;
    public getTemplateName(): string;
    public setTemplateName(val: string): void;
    public getCaching(): boolean;
    public setCaching(val: boolean): void;
    public getDesignCaching(): boolean;
    public setDesignCaching(val: boolean): void;
    public getPreFillCaching(): boolean;
    public setPreFillCaching(val: boolean): void;
    public getIsEntity(): boolean;
    public setIsEntity(val: boolean): void;
    public getHighlightObject(): number;
    public setHighlightObject(val: number): void;
    public getSceneThumbnailObjectNumber(): number;
    public setSceneThumbnailObjectNumber(val: number): void;
    public getAbsoluteUrl(): string;
    public setAbsoluteUrl(val: string): void;
    public getWatermarkImage(): string;
    public setWatermarkImage(val: string): void;
    public getFrame(): number;
    public setFrame(val: number): void;
    public getCustomParameters(): Collections.Dictionary<string, Object>;
}
declare class XpoCoordinatesUrlRequest extends XpoUrlRequest {
    constructor();
}
declare class XpoImageUrlRequest extends XpoUrlRequest {
    constructor();
}
declare class XpoUrlTemplate {
    public index: number;
    public value: string;
    constructor(index: number, value: string);
    public getIndex(): number;
    public setIndex(val: number): void;
    public getValue(): string;
    public setValue(val: string): void;
}
declare class XpoUrlText {
    private text;
    private color;
    private fontname;
    private fontsize;
    private alignment;
    public decorations: string[];
    private dropX;
    private dropY;
    private placingPointX;
    private placingPointY;
    private rotation;
    constructor(text?: string);
    public getText(): string;
    public setText(val: string): void;
    public getColor(): string;
    public setColor(val: string): void;
    public getFontname(): string;
    public setFontname(val: string): void;
    public getFontsize(): number;
    public setFontsize(val: number): void;
    public getAlignment(): UrlGeneratorModule.XpoUrlTextAlignment;
    public setAlignment(val: UrlGeneratorModule.XpoUrlTextAlignment): void;
    public getDecorations(): string[];
    public setDecorations(val: string[]): void;
    public getDropX(): number;
    public setDropX(val: number): void;
    public getDropY(): number;
    public setDropY(val: number): void;
    public getPlacingPointX(): number;
    public setPlacingPointX(val: number): void;
    public getPlacingPointY(): number;
    public setPlacingPointY(val: number): void;
    public getRotation(): number;
    public setRotation(val: number): void;
}
declare module UrlGeneratorModule {
    class XpoUrlTextDecoration {
        static bold: string;
        static italic: string;
        static underline: string;
    }
}
declare module UrlGeneratorModule {
    enum UrlTypes {
        Url = 0,
        Image = 1,
        Coords = 2,
    }
    enum XpoUrlOutputTypes {
        Xml = 1,
        Json = 2,
        Javascript = 3,
    }
    enum XpoUrlObjectTypes {
        Color = 1,
        Design = 2,
    }
    enum XpoUrlTextAlignment {
        Left = 1,
        Middle = 2,
        Right = 3,
    }
    enum XpoUrlFileTypes {
        Scene = 1,
        Design = 2,
        Color = 3,
        SceneThumb = 4,
        Image = 5,
    }
    enum XpoUrlResizeMethods {
        KeepAspect = 1,
        Stretch = 2,
        Crop = 3,
        Repeat = 4,
        KeepAspectMax = 5,
        Canvas = 6,
    }
    enum XpoUrlImageTypes {
        Jpg = 1,
        Png = 2,
        Bmp = 3,
    }
    enum FluentXpoUrlType {
        Image = 0,
        Coordinates = 1,
    }
    enum XpoUrlObjectTransformations {
        None = 1,
        Arc = 2,
        Rotate = 3,
        FlipX = 4,
        FlipY = 5,
    }
    enum XpoUrlOverlayModes {
        MatchSizeOfOutput = 0,
        KeepOriginalSize = 1,
    }
    enum XpoUrlOverlayTimes {
        BeforeResize = 0,
        AfterResize = 1,
    }
    enum XpoUrlOverlayOperations {
        Normal = 0,
        ColoredMapping = 1,
    }
    interface XpoUrlOverlayLocations {
        x: number;
        y: number;
    }
    function getMaxObjectNumber(xpoUrlObjects: XpoUrlObject[]): number;
    function getMaxOverlayNumber(xpoUrlOverlays: XpoUrlOverlay[]): number;
}
