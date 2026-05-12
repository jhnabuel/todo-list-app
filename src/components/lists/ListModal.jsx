import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ListModal({ isOpen, onClose, onSubmit, selectedList }) {
    const isEditing = !!selectedList;

    const COLORS = [
        '#E85D26', '#6366F1', '#2D7D5A',
        '#B45309', '#C0392B', '#0EA5E9',
        '#8B5CF6', '#EC4899',
    ];

    const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = useForm({
        defaultValues: { name: '', color: '#E85D26' }
    });

    if (!isOpen) return null;

    const selectedColor = watch('color');

    return (<>
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl border border-stone-200 w-full max-w-sm animate-slide-up">

                {/* Header */}
                <div className="px-6 py-4 border-b border-stone-100 flex items-start justify-between">
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                            {isEditing ? 'Edit list' : 'New list'}
                        </span>
                        <h2 className="font-serif text-[17px] text-stone-900 mt-0.5 tracking-tight">
                            {isEditing ? 'Edit List' : 'Create a List'}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-6 h-6 flex items-center justify-center rounded border border-stone-200 text-stone-400 hover:text-stone-600 hover:bg-stone-50 text-base leading-none transition-colors"
                    >
                        ×
                    </button>
                </div>

                {/* Form */}
                <form className="px-6 py-5 space-y-5">

                    {/* Name */}
                    <div className="space-y-1.5">
                        <label className="cred-label">
                            List Name <span className="text-red-400 normal-case">*</span>
                        </label>
                        <input
                            className="cred-form"
                            placeholder="e.g. Personal, Academics..."
                            autoFocus
                            {...register('name', { required: 'List name is required' })}
                        />
                        {errors.name && (
                            <p className="text-[11px] text-red-400">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Color picker */}
                    <div className="space-y-2">
                        <label className="cred-label">Color</label>

                        {/* Preview */}
                        <div className="flex items-center gap-2.5 mb-3">
                            <div
                                className="w-8 h-8 rounded-lg flex-shrink-0 transition-colors duration-150"
                                style={{ background: selectedColor }}
                            />
                            <div>
                                <p className="text-sm font-medium text-stone-700">
                                    {watch('name') || 'List name'}
                                </p>
                                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">
                                    {selectedColor}
                                </p>
                            </div>
                        </div>

                        {/* Swatches */}
                        <div className="flex gap-2 flex-wrap">
                            {COLORS.map(color => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={() => setValue('color', color)}
                                    className="w-7 h-7 rounded-lg transition-all duration-150 hover:scale-110 focus:outline-none"
                                    style={{
                                        background: color,
                                        boxShadow: selectedColor === color
                                            ? `0 0 0 2px white, 0 0 0 4px ${color}`
                                            : 'none'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-1.5 text-xs text-stone-500 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors duration-150"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-1.5 text-xs font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-700 transition-colors duration-150"
                        >
                            {isEditing ? 'Save Changes' : 'Create List'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </>)
}