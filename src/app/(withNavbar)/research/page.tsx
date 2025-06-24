
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Calendar, Users } from "lucide-react";

interface Publication {
    id: string;
    title: string;
    authors: string[];
    journal: string;
    year: number;
    doi?: string;
    downloadUrl?: string;
    tags: string[];
    abstract: string;
    type: "journal" | "conference" | "preprint" | "book";
}

const mockPublications: Publication[] = [
    {
        id: "1",
        title: "Advanced Machine Learning Techniques for Quantum Computing Applications",
        authors: ["Dr. Jane Smith", "Prof. John Doe", "Dr. Alice Johnson"],
        journal: "Nature Quantum Information",
        year: 2024,
        doi: "10.1038/s41534-024-00123-4",
        downloadUrl: "/papers/quantum-ml-2024.pdf",
        tags: ["Machine Learning", "Quantum Computing", "AI"],
        abstract: "This paper presents novel approaches to applying machine learning algorithms in quantum computing environments, demonstrating significant improvements in computational efficiency and accuracy.",
        type: "journal"
    },
    {
        id: "2",
        title: "Sustainable Energy Systems: A Comprehensive Analysis of Solar Panel Efficiency",
        authors: ["Dr. Michael Brown", "Prof. Sarah Wilson"],
        journal: "IEEE Transactions on Sustainable Energy",
        year: 2023,
        doi: "10.1109/TSTE.2023.1234567",
        tags: ["Renewable Energy", "Solar Technology", "Sustainability"],
        abstract: "A detailed study examining the latest advancements in solar panel technology and their impact on sustainable energy systems worldwide.",
        type: "journal"
    },
    {
        id: "3",
        title: "Biomedical Engineering Innovations in Neural Interface Design",
        authors: ["Dr. Emily Davis", "Dr. Robert Chen", "Prof. Lisa Anderson"],
        journal: "Proceedings of ICML 2023",
        year: 2023,
        tags: ["Biomedical Engineering", "Neural Interfaces", "Healthcare"],
        abstract: "This research explores cutting-edge developments in neural interface technology, focusing on improving patient outcomes in neurological treatments.",
        type: "conference"
    }
];

const typeColors = {
    journal: "bg-blue-100 text-blue-800",
    conference: "bg-green-100 text-green-800",
    preprint: "bg-yellow-100 text-yellow-800",
    book: "bg-purple-100 text-purple-800"
};

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <motion.div>
            <div className="container mx-auto px-4 py-12">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 mt-32"
                >
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 ">
                        Research & Publications
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover our latest research contributions, scientific publications, and ongoing studies 
                        that push the boundaries of innovation and knowledge.
                    </p>
                </motion.div>

                {/* Publications List */}
                <div className="space-y-8">
                    {mockPublications.map((publication, index) => (
                        <motion.div
                            key={publication.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-500 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
                                <CardContent className="p-0">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                        {/* Main Content */}
                                        <div className="flex-1 space-y-4">
                                            {/* Title and Type */}
                                            <div className="flex flex-wrap items-start gap-3">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight flex-1">
                                                    {publication.title}
                                                </h2>
                                                <Badge className={`${typeColors[publication.type]} border-0 px-3 py-1`}>
                                                    {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                                                </Badge>
                                            </div>

                                            {/* Authors */}
                                            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                                <Users className="w-4 h-4" />
                                                <span className="text-sm">
                                                    {publication.authors.join(", ")}
                                                </span>
                                            </div>

                                            {/* Journal and Year */}
                                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="font-medium">{publication.year}</span>
                                                </div>
                                                <span>•</span>
                                                <span className="italic">{publication.journal}</span>
                                            </div>

                                            {/* Abstract */}
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {publication.abstract}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {publication.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="secondary"
                                                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col gap-3 lg:min-w-[200px]">
                                            {publication.doi && (
                                                <Button
                                                    variant="outline"
                                                    className="w-full justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                                    asChild
                                                >
                                                    <a
                                                        href={`https://doi.org/${publication.doi}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        View DOI
                                                    </a>
                                                </Button>
                                            )}
                                            
                                            {publication.downloadUrl && (
                                                <Button
                                                    className="w-full justify-start gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                                    asChild
                                                >
                                                    <a
                                                        href={publication.downloadUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        Download PDF
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <Card className="p-6 text-center  dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                        <CardContent className="p-0">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {mockPublications.length}
                            </div>
                            <div className="text-gray-700 dark:text-gray-300">Total Publications</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="p-6 text-center dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                        <CardContent className="p-0">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                                {new Date().getFullYear()}
                            </div>
                            <div className="text-gray-700 dark:text-gray-300">Latest Publication</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="p-6 text-center  dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
                        <CardContent className="p-0">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                15+
                            </div>
                            <div className="text-gray-700 dark:text-gray-300">Research Areas</div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
            </motion.div>
        </div>
    );
}