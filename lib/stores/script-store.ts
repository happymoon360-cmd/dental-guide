import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  ScriptParams,
  ScriptOutput,
  ScriptPreset,
  Procedure,
  PaymentMethod,
  Urgency,
  Scenario,
  Budget,
  Tone,
  Channel,
  Language,
} from '@/lib/types';
import { buildScripts } from '@/lib/utils/scripts';

interface ScriptState extends ScriptParams {
  generatedScripts: ScriptOutput | null;
  presets: ScriptPreset[];
  setField: <K extends keyof ScriptState>(field: K, value: ScriptState[K]) => void;
  generateScripts: () => void;
  savePreset: () => void;
  loadPreset: (id: string) => void;
  deletePreset: (id: string) => void;
  reset: () => void;
}

const defaultState: ScriptParams = {
  procedure: 'Exam/Cleaning',
  payment: 'Cash Full Payment',
  urgency: 'General',
  scenario: 'First Visit',
  budget: 'Minimize',
  tone: 'Direct',
  channel: 'In-Person',
  isShort: false,
  lang: 'en',
};

export const useScriptStore = create<ScriptState>()(
  persist(
    (set, get) => ({
      ...defaultState,
      generatedScripts: null,
      presets: [],

      setField: (field, value) => {
        set({ [field]: value });
      },

      generateScripts: () => {
        const state = get();
        const params: ScriptParams = {
          procedure: state.procedure,
          payment: state.payment,
          urgency: state.urgency,
          scenario: state.scenario,
          budget: state.budget,
          tone: state.tone,
          channel: state.channel,
          isShort: state.isShort,
          lang: state.lang,
        };
        const scripts = buildScripts(params);
        set({ generatedScripts: scripts });
      },

      savePreset: () => {
        const state = get();
        const preset: ScriptPreset = {
          id: String(Date.now()),
          procedure: state.procedure,
          payment: state.payment,
          urgency: state.urgency,
          scenario: state.scenario,
          budget: state.budget,
          tone: state.tone,
          channel: state.channel,
          isShort: state.isShort,
          lang: state.lang,
        };
        const updatedPresets = [preset, ...state.presets].slice(0, 20);
        set({ presets: updatedPresets });
      },

      loadPreset: (id: string) => {
        const { presets } = get();
        const preset = presets.find((p) => p.id === id);
        if (preset) {
          set({
            procedure: preset.procedure,
            payment: preset.payment,
            urgency: preset.urgency,
            scenario: preset.scenario,
            budget: preset.budget,
            tone: preset.tone,
            channel: preset.channel,
            isShort: preset.isShort,
            lang: preset.lang,
          });
        }
      },

      deletePreset: (id: string) => {
        const { presets } = get();
        const updatedPresets = presets.filter((p) => p.id !== id);
        set({ presets: updatedPresets });
      },

      reset: () => {
        set({
          ...defaultState,
          generatedScripts: null,
        });
      },
    }),
    {
      name: 'dental-script-storage',
      partialize: (state) => ({
        presets: state.presets,
        // Don't persist generatedScripts or current form values
      }),
    }
  )
);
