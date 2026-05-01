import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
const emptyForm = {
    title: '',
    description: '',
    priority: 'medium',
    status: 'todo',
    due_date: '',
};

export default function TaskModal({ isOpen, onClose, onSubmit, task }) {
    const isEditing = !!task;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                <div className="bg-white border border-stone-200 rounded-xl w-full max-w-[460px]">

                    {/* Header */}
                    <div className="px-6 py-4 border-b border-stone-200 flex items-start justify-between">
                        <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                                {isEditing ? "Edit task" : "New task"}
                            </span>
                            <h2 className="text-[15px] font-medium text-stone-900 mt-0.5">
                                {isEditing ? "Edit Task" : "Create a task"}
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-6 h-6 flex items-center justify-center rounded border border-stone-200 text-stone-400 hover:text-stone-600 hover:bg-stone-50 text-base leading-none"
                        >
                            ×
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-4 flex flex-col gap-3.5">

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-medium text-stone-500 tracking-wide">
                                Title <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="What needs to be done?"
                                className="w-full px-2.5 py-2 text-[13px] border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 text-stone-800 placeholder:text-stone-300"
                                {...register("title", { required: "Title is required" })}
                            />
                            {errors.title && (
                                <p className="text-[11px] text-red-400">{errors.title.message}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-medium text-stone-500 tracking-wide">Description</label>
                            <textarea
                                rows={3}
                                placeholder="Add details or notes..."
                                className="w-full px-2.5 py-2 text-[13px] border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 text-stone-800 placeholder:text-stone-300 resize-y"
                                {...register("description")}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-medium text-stone-500 tracking-wide">Status</label>
                                <select
                                    className="w-full px-2.5 py-2 text-[13px] border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 text-stone-800"
                                    {...register("status")}
                                >
                                    <option value="todo">To-Do</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] font-medium text-stone-500 tracking-wide">Priority</label>
                                <select
                                    className="w-full px-2.5 py-2 text-[13px] border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 text-stone-800"
                                    {...register("priority")}
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] font-medium text-stone-500 tracking-wide">Due date</label>
                            <input
                                type="date"
                                className="w-full px-2.5 py-2 text-[13px] border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 text-stone-800"
                                {...register("due_date")}
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-1.5 text-[12px] text-stone-500 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-1.5 text-[12px] font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors"
                            >
                                {isEditing ? "Save Changes" : "Create Task"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}