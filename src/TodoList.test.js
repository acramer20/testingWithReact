import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import Todo from "./Todo";

function addTestTodo(todoList, task = "test todos") {
    const taskInput = todoList.getByLabelText("Task:");
    fireEvent.change(taskInput, { target: {value: task }});
    const submitButton = todoList.getByText("Add new todo!");
    fireEvent.click(submitButton);
}

it("renders and does not crash", function() {
    render(<TodoList/>);
});

it("matches the snapshot", function(){
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a new todo", function() {
    const list = render(<TodoList />);
    addTestTodo(list);

    //expect the todo to be on page and form to clear for next todo
    expect(list.getByLabelText("Task:")).toHaveValue("");
    expect(list.getByText("test todos")).toBeInTheDocument();
    expect(list.getByText("X")).toBeInTheDocument();
});

it("deletes a todo", function() {
    const list = render(<TodoList />);
    addTestTodo(list);

    fireEvent.click(list.getByText("X"));

    //expect the todo to be deleted
    expect(list.queryByText("test todos")).not.toBeInTheDocument();
});